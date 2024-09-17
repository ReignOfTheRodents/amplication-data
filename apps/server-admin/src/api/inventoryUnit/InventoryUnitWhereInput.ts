import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { DispositionWhereUniqueInput } from "../disposition/DispositionWhereUniqueInput";
import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StorageLocationWhereUniqueInput } from "../storageLocation/StorageLocationWhereUniqueInput";

export type InventoryUnitWhereInput = {
  acquisitionDate?: DateTimeFilter;
  component?: ComponentWhereUniqueInput;
  condition?: "New" | "Excellent" | "Good" | "Worn" | "Damaged" | "Unusable";
  disposition?: DispositionWhereUniqueInput;
  expense?: ExpenseWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  serialNumber?: StringFilter;
  storageLocation?: StorageLocationWhereUniqueInput;
  use?: "Active" | "Spare" | "Display" | "Other" | "Inactive";
};
