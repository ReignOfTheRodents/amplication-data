/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Certification } from "../../certification/base/Certification";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Expense } from "../../expense/base/Expense";
import { EnumContractTypeField } from "./EnumContractTypeField";

@ObjectType()
class Contract {
  @ApiProperty({
    required: false,
    type: () => Certification,
  })
  @ValidateNested()
  @Type(() => Certification)
  @IsOptional()
  certification?: Certification | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endDate!: Date;

  @ApiProperty({
    required: false,
    type: () => Expense,
  })
  @ValidateNested()
  @Type(() => Expense)
  @IsOptional()
  expense?: Expense | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  notes!: string | null;

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
  @Field(() => EnumContractTypeField, {
    nullable: true,
  })
  typeField?: "Purchase" | "Lease" | "Service" | "Other";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Contract as Contract };
