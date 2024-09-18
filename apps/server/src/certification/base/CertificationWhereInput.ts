/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCertificationAction } from "./EnumCertificationAction";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { ComponentListRelationFilter } from "../../component/base/ComponentListRelationFilter";
import { ContractListRelationFilter } from "../../contract/base/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumCertificationSystemType } from "./EnumCertificationSystemType";
import { EnumCertificationTypeField } from "./EnumCertificationTypeField";
import { VendorWhereUniqueInput } from "../../vendor/base/VendorWhereUniqueInput";

@InputType()
class CertificationWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumCertificationAction,
  })
  @IsEnum(EnumCertificationAction)
  @IsOptional()
  @Field(() => EnumCertificationAction, {
    nullable: true,
  })
  action?: "Approved" | "Pending" | "Denied" | "Other";

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  applicationDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  certificationDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => ComponentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComponentListRelationFilter)
  @IsOptional()
  @Field(() => ComponentListRelationFilter, {
    nullable: true,
  })
  components?: ComponentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ContractListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContractListRelationFilter)
  @IsOptional()
  @Field(() => ContractListRelationFilter, {
    nullable: true,
  })
  contracts?: ContractListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  expirationDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  federalCertDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  federalCertNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  modelNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  notes?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumCertificationSystemType,
  })
  @IsEnum(EnumCertificationSystemType)
  @IsOptional()
  @Field(() => EnumCertificationSystemType, {
    nullable: true,
  })
  systemType?: "Vs" | "Epb";

  @ApiProperty({
    required: false,
    enum: EnumCertificationTypeField,
  })
  @IsEnum(EnumCertificationTypeField)
  @IsOptional()
  @Field(() => EnumCertificationTypeField, {
    nullable: true,
  })
  typeField?:
    | "Certification"
    | "Reevaluation"
    | "Renewal"
    | "Recertification"
    | "Other";

  @ApiProperty({
    required: false,
    type: () => VendorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VendorWhereUniqueInput)
  @IsOptional()
  @Field(() => VendorWhereUniqueInput, {
    nullable: true,
  })
  vendor?: VendorWhereUniqueInput;
}

export { CertificationWhereInput as CertificationWhereInput };
