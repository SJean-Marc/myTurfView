import {Participant} from '../../participant/participant';

export class Race {
  id: string;
  name: string;
  departureTime: Date;
  participants: Participant[];
}
