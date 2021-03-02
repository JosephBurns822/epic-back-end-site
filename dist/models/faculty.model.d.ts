import { Entity } from '@loopback/repository';
export declare class Faculty extends Entity {
    _id?: string;
    name: string;
    email: string;
    department: string;
    constructor(data?: Partial<Faculty>);
}
export interface FacultyRelations {
}
export declare type FacultyWithRelations = Faculty & FacultyRelations;
