import { IsNotEmpty, IsEmail, IsOptional, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePersonDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

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