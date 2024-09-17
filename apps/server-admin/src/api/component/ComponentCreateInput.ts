import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { InventoryUnitCreateNestedManyWithoutComponentsInput } from "./InventoryUnitCreateNestedManyWithoutComponentsInput";

export type ComponentCreateInput = {
  certification?: CertificationWhereUniqueInput | null;
  description: string;
  inventoryUnits?: InventoryUnitCreateNestedManyWithoutComponentsInput;
  name: string;
  typeField:
    | "Dre"
    | "OpScan"
    | "Bmd"
    | "Vvpat"
    | "Cots"
    | "Other"
    | "Hardware"
    | "Software"
    | "Peripheral";
};
