export interface ChatMessage {
  id: number;
  message: string;
  itsMine: boolean;
  image?: string; // Optional field to indicate if the message is an error
}
