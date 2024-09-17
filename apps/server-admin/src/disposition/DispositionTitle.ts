import { Disposition as TDisposition } from "../api/disposition/Disposition";

export const DISPOSITION_TITLE_FIELD = "entity";

export const DispositionTitle = (record: TDisposition): string => {
  return record.entity?.toString() || String(record.id);
};
