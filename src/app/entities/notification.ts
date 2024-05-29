import { Replace } from "src/helpers/Replace";
import { Content } from "./notification-content";

export interface NotificationProps {
  recipient: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  createdAt: Date ;
}

export class Notification {
  private props: NotificationProps; // attribute

  constructor(props: Replace<NotificationProps, {createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  public set recipient(recipient: string) {
    this.props.recipient = recipient
  }

  public get recipient(): string {
    return this.props.recipient
  }

  public set content(content: Content) {
    this.props.content = content
  }

  public get content(): Content {
    return this.props.content
  }

  public set category(category: string) {
    this.props.category = category
  }

  public get category(): string {
    return this.props.category
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readtAt = readAt
  }

  public get readAt(): Date | null | undefined {
    return this.props.readtAt
  }

  
  public get createdAt(): Date {
    return this.props.createdAt
  }

}

