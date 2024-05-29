import { Content } from "./notification-content"


describe('Notification Content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content("Voce recebeu uma notificação")
  
    expect(content).toBeTruthy()
  })
  
  test('it should not ne able to create a notification content with less 5 characters', () => {
    expect(() => new Content("Vo")).toThrow()
  })
  
  test('it should not ne able to create a notification content with more 240  characters', () => {
    expect(() => new Content("V".repeat(241))).toThrow()
  })
})


