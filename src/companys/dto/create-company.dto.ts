import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsOptional()
  founding_date?: Date;

  @IsString()
  @IsOptional()
  headquarters?: string;

  @IsString()
  @IsOptional()
  ceo?: string;

  @IsString()
  @IsOptional()
  more_info?: string;

  @IsNumber()
  @IsOptional()
  picsId?: number;
}
