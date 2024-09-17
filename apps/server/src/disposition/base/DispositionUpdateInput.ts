/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Max,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { InventoryUnitUpdateManyWithoutDispositionsInput } from "./InventoryUnitUpdateManyWithoutDispositionsInput";

@InputType()
class DispositionUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  amount?: Decimal | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date;

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
  entity?: string;

  @ApiProperty({
    required: false,
    type: () => InventoryUnitUpdateManyWithoutDispositionsInput,
  })
  @ValidateNested()
  @Type(() => InventoryUnitUpdateManyWithoutDispositionsInput)
  @IsOptional()
  @Field(() => InventoryUnitUpdateManyWithoutDispositionsInput, {
    nullable: true,
  })
  inventoryUnits?: InventoryUnitUpdateManyWithoutDispositionsInput;

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
  method?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;
}

export { DispositionUpdateInput as DispositionUpdateInput };
