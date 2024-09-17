import { InventoryUnitWhereInput } from "./InventoryUnitWhereInput";
import { InventoryUnitOrderByInput } from "./InventoryUnitOrderByInput";

export type InventoryUnitFindManyArgs = {
  where?: InventoryUnitWhereInput;
  orderBy?: Array<InventoryUnitOrderByInput>;
  skip?: number;
  take?: number;
};
