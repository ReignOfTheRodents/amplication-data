import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { InventoryUnitController } from "../inventoryUnit.controller";
import { InventoryUnitService } from "../inventoryUnit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acquisitionDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  serialNumber: "exampleSerialNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  acquisitionDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  serialNumber: "exampleSerialNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    acquisitionDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    notes: "exampleNotes",
    serialNumber: "exampleSerialNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  acquisitionDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  serialNumber: "exampleSerialNumber",
  updatedAt: new Date(),
};

const service = {
  createInventoryUnit() {
    return CREATE_RESULT;
  },
  inventoryUnits: () => FIND_MANY_RESULT,
  inventoryUnit: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("InventoryUnit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InventoryUnitService,
          useValue: service,
        },
      ],
      controllers: [InventoryUnitController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /inventoryUnits", async () => {
    await request(app.getHttpServer())
      .post("/inventoryUnits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acquisitionDate: CREATE_RESULT.acquisitionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /inventoryUnits", async () => {
    await request(app.getHttpServer())
      .get("/inventoryUnits")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          acquisitionDate: FIND_MANY_RESULT[0].acquisitionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /inventoryUnits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/inventoryUnits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /inventoryUnits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/inventoryUnits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        acquisitionDate: FIND_ONE_RESULT.acquisitionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /inventoryUnits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/inventoryUnits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acquisitionDate: CREATE_RESULT.acquisitionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/inventoryUnits")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
