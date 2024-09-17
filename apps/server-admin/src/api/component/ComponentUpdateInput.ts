import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { InventoryUnitUpdateManyWithoutComponentsInput } from "./InventoryUnitUpdateManyWithoutComponentsInput";

export type ComponentUpdateInput = {
  certification?: CertificationWhereUniqueInput | null;
  description?: string;
  inventoryUnits?: InventoryUnitUpdateManyWithoutComponentsInput;
  name?: string;
  typeField?:
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
