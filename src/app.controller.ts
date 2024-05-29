import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './infra/prisma.service';
import {randomUUID} from 'node:crypto'
import { CreateNotificationBody } from './infra/create-notification-body';

@Controller('notifications') // nesse decorator posso definir uma rota
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get() // neesse outro tambem
  list() {
    return this.prisma.notifications.findMany({
    })
  }

  @Post() // neesse outro tambem
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipient } = body

    await this.prisma.notifications.create({
      data: {
        id: randomUUID(),
        content: "Voce tem uma nova solicitação de amizade",
        category: "Social",
        recipient: randomUUID(),
      }
    })
  }

}
