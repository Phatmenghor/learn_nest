import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-uesr.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
