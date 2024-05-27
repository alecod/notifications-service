import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { MailService } from '../old-mail/mail.service';

@Controller() // nesse decorator posso definir uma rota
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Get() // neesse outro tambem
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
