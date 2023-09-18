export interface Properties {
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
    images: Image[];
  }
  
  interface Image {
    id: number;
    img: string;
  }