import faker from 'faker';
import { MappableType } from './CustomMap';
export class User implements MappableType{
    name: string;
    color: string = 'red';
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string{
        return `User Name: ${this.name}`;
    }
}