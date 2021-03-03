import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Course } from '../models';
import { CourseRepository } from '../repositories';
export declare class CourseController {
    courseRepository: CourseRepository;
    constructor(courseRepository: CourseRepository);
    create(course: Omit<Course, '_id'>): Promise<Course>;
    count(where?: Where<Course>): Promise<Count>;
    find(filter?: Filter<Course>): Promise<Course[]>;
    updateAll(course: Course, where?: Where<Course>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Course>): Promise<Course>;
    updateById(id: number, course: Course): Promise<void>;
    replaceById(id: number, course: Course): Promise<void>;
    deleteById(id: number): Promise<void>;
}
