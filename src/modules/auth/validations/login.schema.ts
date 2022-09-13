import { BaseValidationSchema } from '@app/core/validation/schema';
import { IsEmail, IsString, MinLength } from 'class-validator';
import joi from 'joi';

// export const LoginSchema = 

// joi.object({
//   email: joi.string().email().required(),
//   password: joi.string().required(),
// })

export class LoginSchema extends BaseValidationSchema<LoginSchema>() {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}