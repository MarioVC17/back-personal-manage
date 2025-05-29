import { IsOptional, IsEmail, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePersonDto {
  @IsOptional()
  readonly firstName?: string;

  @IsOptional()
  readonly lastName?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  readonly position?: string;

  @IsOptional()
  readonly department?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly hireDate?: Date;

  @IsOptional()
  @IsNumber()
  readonly salary?: number;
}