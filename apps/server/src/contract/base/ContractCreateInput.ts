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
import { CertificationWhereUniqueInput } from "../../certification/base/CertificationWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ExpenseCreateNestedManyWithoutContractsInput } from "./ExpenseCreateNestedManyWithoutContractsInput";
import { EnumContractTypeField } from "./EnumContractTypeField";

@InputType()
class ContractCreateInput {
  @ApiProperty({
    required: false,
    type: () => CertificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CertificationWhereUniqueInput)
  @IsOptional()
  @Field(() => CertificationWhereUniqueInput, {
    nullable: true,
  })
  certification?: CertificationWhereUniqueInput | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endDate!: Date;

  @ApiProperty({
    required: false,
    type: () => ExpenseCreateNestedManyWithoutContractsInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCreateNestedManyWithoutContractsInput)
  @IsOptional()
  @Field(() => ExpenseCreateNestedManyWithoutContractsInput, {
    nullable: true,
  })
  expenses?: ExpenseCreateNestedManyWithoutContractsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumContractTypeField,
  })
  @IsEnum(EnumContractTypeField)
  @Field(() => EnumContractTypeField)
  typeField!: "Purchase" | "Lease" | "Service" | "Other";
}

export { ContractCreateInput as ContractCreateInput };
