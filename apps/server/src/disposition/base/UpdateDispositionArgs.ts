/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DispositionWhereUniqueInput } from "./DispositionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DispositionUpdateInput } from "./DispositionUpdateInput";

@ArgsType()
class UpdateDispositionArgs {
  @ApiProperty({
    required: true,
    type: () => DispositionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DispositionWhereUniqueInput)
  @Field(() => DispositionWhereUniqueInput, { nullable: false })
  where!: DispositionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DispositionUpdateInput,
  })
  @ValidateNested()
  @Type(() => DispositionUpdateInput)
  @Field(() => DispositionUpdateInput, { nullable: false })
  data!: DispositionUpdateInput;
}

export { UpdateDispositionArgs as UpdateDispositionArgs };
