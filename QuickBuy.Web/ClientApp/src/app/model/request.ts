import { ItemRequest } from "./itemRequest";

export class Request {
  id: number;
  requestDate: Date;
  userId: number;
  deliveryDateForecast: Date;
  postalCode: string;
  city: string;
  distric: string;
  address: string;
  addressNumber: string;
  paymentMethodId: number;

  itemsRequest: ItemRequest[];

  constructor() {
    this.requestDate = new Date();
    this.itemsRequest = [];
  }
}