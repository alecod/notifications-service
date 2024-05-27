import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class PostmarkEmailService implements MailService {
  sendEmail(): string {
    return 'Send email to Postmark'
  }

}