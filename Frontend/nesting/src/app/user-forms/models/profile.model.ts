import { Card } from "./card.model";

export interface Profile {
  id: number;
  name: string;
  lastname: string;
  address: string;
  card: Card;
  propertiesPublished: {
    id: number;
    title: string;
    description: string;
    city: string;
    postalCode: string;
    rooms: number;
    baths: number;
    size: number;
    price: number;
    type: string;
    status: boolean;
    houseType: string;
    publishDate: string;
    modificationDate: string;
    images: {
      id: number;
      img: string;
    }[];
  }[];
}  