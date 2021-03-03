import { Entity } from '@loopback/repository';
export declare class Course extends Entity {
    _id?: number;
    semester: string;
    year: string;
    prefix: string;
    number: string;
    section?: string;
    constructor(data?: Partial<Course>);
}
export interface CourseRelations {
}
export declare type CourseWithRelations = Course & CourseRelations;
