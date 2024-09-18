import { County } from "../county/County";
import { JsonValue } from "type-fest";

export type User = {
  counties?: Array<County>;
  createdAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastLogin: Date | null;
  lastLogout: Date | null;
  lastName: string;
  organization: string;
  phone: string | null;
  roles: JsonValue;
  supervisorEmail: string;
  supervisorName: string;
  updatedAt: Date;
  username: string;
};
