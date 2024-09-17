import { Certification as TCertification } from "../api/certification/Certification";

export const CERTIFICATION_TITLE_FIELD = "federalCertNumber";

export const CertificationTitle = (record: TCertification): string => {
  return record.federalCertNumber?.toString() || String(record.id);
};
