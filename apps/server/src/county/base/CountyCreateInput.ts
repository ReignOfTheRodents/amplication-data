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
import { ExpenseCreateNestedManyWithoutCountiesInput } from "./ExpenseCreateNestedManyWithoutCountiesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutCountiesInput } from "./UserCreateNestedManyWithoutCountiesInput";

@InputType()
class CountyCreateInput {
  @ApiProperty({
    required: false,
    type: () => ExpenseCreateNestedManyWithoutCountiesInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCreateNestedManyWithoutCountiesInput)
  @IsOptional()
  @Field(() => ExpenseCreateNestedManyWithoutCountiesInput, {
    nullable: true,
  })
  expenses?: ExpenseCreateNestedManyWithoutCountiesInput;

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
    type: () => UserCreateNestedManyWithoutCountiesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCountiesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCountiesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutCountiesInput;
}

export { CountyCreateInput as CountyCreateInput };
