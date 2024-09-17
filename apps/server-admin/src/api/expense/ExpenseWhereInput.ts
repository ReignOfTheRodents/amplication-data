import { DecimalFilter } from "../../util/DecimalFilter";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InventoryUnitListRelationFilter } from "../inventoryUnit/InventoryUnitListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type ExpenseWhereInput = {
  amount?: DecimalFilter;
  contract?: ContractWhereUniqueInput;
  county?: CountyWhereUniqueInput;
  fund?: StringFilter;
  id?: StringFilter;
  inventoryUnits?: InventoryUnitListRelationFilter;
  name?: StringFilter;
  notes?: StringNullableFilter;
  owner?: StringFilter;
  vendor?: VendorWhereUniqueInput;
};
