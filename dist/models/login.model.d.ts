import { Entity } from '@loopback/repository';
export declare class Login extends Entity {
    _id?: string;
    name: string;
    email: string;
    password: string;
    constructor(data?: Partial<Login>);
}
export interface LoginRelations {
}
export declare type LoginWithRelations = Login & LoginRelations;
