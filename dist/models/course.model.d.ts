import { Entity } from '@loopback/repository';
export declare class Course extends Entity {
    _id?: string;
    semester: string;
    year: number;
    prefix: string;
    number: string;
    section?: string;
    constructor(data?: Partial<Course>);
}
export interface CourseRelations {
}
export declare type CourseWithRelations = Course & CourseRelations;
