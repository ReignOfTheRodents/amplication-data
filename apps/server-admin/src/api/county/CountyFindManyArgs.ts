import { CountyWhereInput } from "./CountyWhereInput";
import { CountyOrderByInput } from "./CountyOrderByInput";

export type CountyFindManyArgs = {
  where?: CountyWhereInput;
  orderBy?: Array<CountyOrderByInput>;
  skip?: number;
  take?: number;
};
