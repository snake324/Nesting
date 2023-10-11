import { Card } from "./card.model";

export interface Profile {
  userProfile: any;
  id: number;
  name: string;
  lastname: string;
  address: string;
  card: {
    id: number;
    owner: string;
    surname: string;
    number: string;
    expiremonth: string;
    expireyear: string;
  };
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