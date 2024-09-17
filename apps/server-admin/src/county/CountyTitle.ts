import { County as TCounty } from "../api/county/County";

export const COUNTY_TITLE_FIELD = "name";

export const CountyTitle = (record: TCounty): string => {
  return record.name?.toString() || String(record.id);
};
