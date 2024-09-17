import { StringFilter } from "../../util/StringFilter";
import { InventoryUnitListRelationFilter } from "../inventoryUnit/InventoryUnitListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StorageLocationWhereInput = {
  address?: StringFilter;
  city?: StringFilter;
  id?: StringFilter;
  inventoryUnits?: InventoryUnitListRelationFilter;
  name?: StringFilter;
  notes?: StringNullableFilter;
  state?: StringFilter;
  zip?: StringFilter;
};
