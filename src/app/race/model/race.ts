import {Participant} from '../../participant/model/participant';

export class Race {
  id: string;
  name: string;
  departureTime: Date;
  participants: Participant[];
}
