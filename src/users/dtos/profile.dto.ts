import { IsNotEmpty, IsString, IsOptional, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  avatar: string;
}

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
