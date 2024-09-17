import { ComponentWhereUniqueInput } from "../component/ComponentWhereUniqueInput";
import { DispositionWhereUniqueInput } from "../disposition/DispositionWhereUniqueInput";
import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { StorageLocationWhereUniqueInput } from "../storageLocation/StorageLocationWhereUniqueInput";

export type InventoryUnitUpdateInput = {
  acquisitionDate?: Date;
  component?: ComponentWhereUniqueInput | null;
  condition?: "New" | "Excellent" | "Good" | "Worn" | "Damaged" | "Unusable";
  disposition?: DispositionWhereUniqueInput | null;
  expense?: ExpenseWhereUniqueInput | null;
  notes?: string | null;
  serialNumber?: string;
  storageLocation?: StorageLocationWhereUniqueInput | null;
  use?: "Active" | "Spare" | "Display" | "Other" | "Inactive";
};
