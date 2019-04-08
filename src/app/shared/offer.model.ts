import { User } from "./user.model";

export class Offer {
    period: string;
    description: string;
    status: string; 
    filename: string;
    published: string;
    author: User;
}