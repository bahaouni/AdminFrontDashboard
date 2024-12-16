import {Service} from "./Service";

export interface Event {
  id?: number;
  name: string;
  date:string;
  createdDate:string;
  eventServices:Service[]
}
