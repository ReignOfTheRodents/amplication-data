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
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { InventoryUnitCreateNestedManyWithoutComponentsInput } from "./InventoryUnitCreateNestedManyWithoutComponentsInput";
import { EnumComponentTypeField } from "./EnumComponentTypeField";

@InputType()
class ComponentCreateInput {
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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: () => InventoryUnitCreateNestedManyWithoutComponentsInput,
  })
  @ValidateNested()
  @Type(() => InventoryUnitCreateNestedManyWithoutComponentsInput)
  @IsOptional()
  @Field(() => InventoryUnitCreateNestedManyWithoutComponentsInput, {
    nullable: true,
  })
  inventoryUnits?: InventoryUnitCreateNestedManyWithoutComponentsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    enum: EnumComponentTypeField,
  })
  @IsEnum(EnumComponentTypeField)
  @Field(() => EnumComponentTypeField)
  typeField!:
    | "Dre"
    | "OpScan"
    | "Bmd"
    | "Vvpat"
    | "Cots"
    | "Other"
    | "Hardware"
    | "Software"
    | "Peripheral";
}

export { ComponentCreateInput as ComponentCreateInput };
