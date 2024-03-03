import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class ContactFormDTO {
  @IsString()
  name: string

  @IsString()
  subject: string

  @IsNotEmpty()
  @IsEmail()
  emailAddress: string

  @IsString()
  message: string
}
