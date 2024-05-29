import { Notification } from "./notification"
import { Content } from "./notification-content"


describe('Notification', () => {
  test('it should be able to create a notification', () => {
    const notifications = new Notification({
      content: new Content('Nova Solicitação de amizade'),
      category: 'social',
      recipient: 'example-id',
    })
  
    expect(notifications).toBeTruthy()
  })
  
})


