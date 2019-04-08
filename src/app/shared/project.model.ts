import { Offer } from "./offer.model";
import { User } from "./user.model";

export class Project {
    title: string;
    description: string; 
    budget: string;
    status: string;
    published: string;
    author: User;
    offers: Offer;
}