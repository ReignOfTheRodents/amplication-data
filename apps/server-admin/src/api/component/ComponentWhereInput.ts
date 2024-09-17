import { CertificationWhereUniqueInput } from "../certification/CertificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InventoryUnitListRelationFilter } from "../inventoryUnit/InventoryUnitListRelationFilter";

export type ComponentWhereInput = {
  certification?: CertificationWhereUniqueInput;
  description?: StringFilter;
  id?: StringFilter;
  inventoryUnits?: InventoryUnitListRelationFilter;
  name?: StringFilter;
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
