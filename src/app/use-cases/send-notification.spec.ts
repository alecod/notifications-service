import { Notification } from "../entities/notification"
import { SendNotification } from "./send-notification"


const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification)
  }
}

describe('Send Noitification', () => {
    it('should be aable to send a mnotification', async () => {
      const sendNotification = new SendNotification(notificationsRepository)

      const {notification}  = await sendNotification.execute({
        category: 'notification',
        content: 'tHIS IS A NOTIFICATION',
        recipient: 'example-recipient-id'
      })

      expect(notification).toBeTruthy()

    })
} )