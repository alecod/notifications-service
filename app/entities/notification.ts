export interface NotificationProps {
  recipient: string;
  content: string;
  category: string;
  readtAt?: Date | null;
  createdAt?: Date;
}

export class Notification {
  private props: NotificationProps; // attribute

  constructor(props: NotificationProps) {
    this.props = props
  }

  public set recipient(recipient: string) {
    this.props.recipient = recipient
  }

  public get recipient(): string {
    return this.props.recipient
  }

  public set content(content: string) {
    this.props.content = content
  }

  public get content(): string {
    return this.props.content
  }

  public set category(category: string) {
    this.props.category = category
  }

  public get category(): string {
    return this.props.category
  }

  public set date(date: Date) {
    this.props.readtAt = readAt
  }

  public get date(): string {
    return this.props.date
  }

}

