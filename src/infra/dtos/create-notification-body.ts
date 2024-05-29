import { IsNotEmpty, IsUUID, Length } from "class-validator";


// AQUI INFORMA O BODY DA REQUISIÇÃO
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipient: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  
  @IsNotEmpty()
  category: string;

}