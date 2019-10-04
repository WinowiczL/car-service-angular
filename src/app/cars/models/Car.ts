import {Client} from './Client';

export interface Car {
  id: number;
  model: string;
  plate: string;
  deliveryDate: Date;
  deadline: Date;
  client: Client;
  cost: number;
  isFullyDamaged: boolean;
}
