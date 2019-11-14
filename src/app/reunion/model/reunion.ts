import {Race} from '../../race/model/race';

export class Reunion {
  id: number;
  name: string;
  hippodrome: string;
  date: Date;
  races: Race[];
}
