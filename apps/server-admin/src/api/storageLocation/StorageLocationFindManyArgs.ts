import { StorageLocationWhereInput } from "./StorageLocationWhereInput";
import { StorageLocationOrderByInput } from "./StorageLocationOrderByInput";

export type StorageLocationFindManyArgs = {
  where?: StorageLocationWhereInput;
  orderBy?: Array<StorageLocationOrderByInput>;
  skip?: number;
  take?: number;
};
