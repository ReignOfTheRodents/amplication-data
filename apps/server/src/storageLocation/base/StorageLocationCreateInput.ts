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
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { InventoryUnitCreateNestedManyWithoutStorageLocationsInput } from "./InventoryUnitCreateNestedManyWithoutStorageLocationsInput";
import { Type } from "class-transformer";

@InputType()
class StorageLocationCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  city!: string;

  @ApiProperty({
    required: false,
    type: () => InventoryUnitCreateNestedManyWithoutStorageLocationsInput,
  })
  @ValidateNested()
  @Type(() => InventoryUnitCreateNestedManyWithoutStorageLocationsInput)
  @IsOptional()
  @Field(() => InventoryUnitCreateNestedManyWithoutStorageLocationsInput, {
    nullable: true,
  })
  inventoryUnits?: InventoryUnitCreateNestedManyWithoutStorageLocationsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  state!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  zip!: string;
}

export { StorageLocationCreateInput as StorageLocationCreateInput };
