import { StorageLocation as TStorageLocation } from "../api/storageLocation/StorageLocation";

export const STORAGELOCATION_TITLE_FIELD = "name";

export const StorageLocationTitle = (record: TStorageLocation): string => {
  return record.name?.toString() || String(record.id);
};
