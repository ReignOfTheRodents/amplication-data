import { Vendor as TVendor } from "../api/vendor/Vendor";

export const VENDOR_TITLE_FIELD = "contactFirstName";

export const VendorTitle = (record: TVendor): string => {
  return record.contactFirstName?.toString() || String(record.id);
};
