import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class STMPMailService implements MailService {
  sendEmail(): string {
    return 'Send email to smtp'
  }

}