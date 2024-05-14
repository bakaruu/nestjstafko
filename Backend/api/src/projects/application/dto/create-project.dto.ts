import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate, IsEnum } from 'class-validator';

enum Status {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed'
}

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsArray()
  userIds?: string[];

  @IsOptional()
  @IsString()
  clientId?: string;

  // Add these fields
  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @IsString()
  progress?: number;

  @IsOptional()
  @IsDate()
  deadline?: String;
}