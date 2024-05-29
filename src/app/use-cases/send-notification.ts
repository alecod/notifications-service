import { Notification } from "../entities/notification";
import { Content } from "../entities/notification-content";
import { NotificationsRepository } from "../repositories/notification-repository";

interface SendNotificationRequest {
  recipient: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {

  constructor(private notificationsRepository: NotificationsRepository) {

  }

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { category, content, recipient } = request

    const notification = new Notification({
      category,
      content: new Content(content),
      recipient
    })

    await this.notificationsRepository.create(notification)


    return {
      notification
    }
  }
}