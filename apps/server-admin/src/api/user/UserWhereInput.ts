import { CountyWhereUniqueInput } from "../county/CountyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  county?: CountyWhereUniqueInput;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  lastLogout?: DateTimeNullableFilter;
  lastName?: StringFilter;
  organization?: StringFilter;
  phone?: StringNullableFilter;
  supervisorEmail?: StringFilter;
  supervisorName?: StringFilter;
  username?: StringFilter;
};
