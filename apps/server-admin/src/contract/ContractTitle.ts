import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "notes";

export const ContractTitle = (record: TContract): string => {
  return record.notes?.toString() || String(record.id);
};
