import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryUnitListRelationFilter } from "../inventoryUnit/InventoryUnitListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DispositionWhereInput = {
  amount?: DecimalNullableFilter;
  date?: DateTimeFilter;
  entity?: StringFilter;
  id?: StringFilter;
  inventoryUnits?: InventoryUnitListRelationFilter;
  method?: StringFilter;
  notes?: StringNullableFilter;
};
