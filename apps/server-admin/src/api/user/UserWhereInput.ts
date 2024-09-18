import { CountyListRelationFilter } from "../county/CountyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  counties?: CountyListRelationFilter;
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
