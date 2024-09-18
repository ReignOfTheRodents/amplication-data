import { CountyUpdateManyWithoutUsersInput } from "./CountyUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  counties?: CountyUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string;
  lastLogin?: Date | null;
  lastLogout?: Date | null;
  lastName?: string;
  organization?: string;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  supervisorEmail?: string;
  supervisorName?: string;
  username?: string;
};
