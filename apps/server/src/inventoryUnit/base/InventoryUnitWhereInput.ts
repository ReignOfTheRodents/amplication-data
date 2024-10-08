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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ComponentWhereUniqueInput } from "../../component/base/ComponentWhereUniqueInput";
import { EnumInventoryUnitCondition } from "./EnumInventoryUnitCondition";
import { DispositionWhereUniqueInput } from "../../disposition/base/DispositionWhereUniqueInput";
import { ExpenseWhereUniqueInput } from "../../expense/base/ExpenseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StorageLocationWhereUniqueInput } from "../../storageLocation/base/StorageLocationWhereUniqueInput";
import { EnumInventoryUnitUse } from "./EnumInventoryUnitUse";

@InputType()
class InventoryUnitWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  acquisitionDate?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => ComponentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComponentWhereUniqueInput)
  @IsOptional()
  @Field(() => ComponentWhereUniqueInput, {
    nullable: true,
  })
  component?: ComponentWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumInventoryUnitCondition,
  })
  @IsEnum(EnumInventoryUnitCondition)
  @IsOptional()
  @Field(() => EnumInventoryUnitCondition, {
    nullable: true,
  })
  condition?: "New" | "Excellent" | "Good" | "Worn" | "Damaged" | "Unusable";

  @ApiProperty({
    required: false,
    type: () => DispositionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DispositionWhereUniqueInput)
  @IsOptional()
  @Field(() => DispositionWhereUniqueInput, {
    nullable: true,
  })
  disposition?: DispositionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExpenseWhereUniqueInput)
  @IsOptional()
  @Field(() => ExpenseWhereUniqueInput, {
    nullable: true,
  })
  expense?: ExpenseWhereUniqueInput;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  serialNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => StorageLocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StorageLocationWhereUniqueInput)
  @IsOptional()
  @Field(() => StorageLocationWhereUniqueInput, {
    nullable: true,
  })
  storageLocation?: StorageLocationWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumInventoryUnitUse,
  })
  @IsEnum(EnumInventoryUnitUse)
  @IsOptional()
  @Field(() => EnumInventoryUnitUse, {
    nullable: true,
  })
  use?: "Active" | "Spare" | "Display" | "Other" | "Inactive";
}

export { InventoryUnitWhereInput as InventoryUnitWhereInput };
