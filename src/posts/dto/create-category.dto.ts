import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
