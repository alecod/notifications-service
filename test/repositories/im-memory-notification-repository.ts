
import { NotificationProps, Notification } from "../../src/app/entities/notification"
import { NotificationsRepository } from "../../src/app/repositories/notification-repository"

// database memory


export class InMemorynotificationsRepository implements NotificationsRepository {
  public notifications: NotificationProps[] = []

  async create(notification: Notification) {
    this.notifications.push(notification)
  }
}
 