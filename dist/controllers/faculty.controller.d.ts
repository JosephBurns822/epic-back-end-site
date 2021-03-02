import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Faculty } from '../models';
import { FacultyRepository } from '../repositories';
export declare class FacultyController {
    facultyRepository: FacultyRepository;
    constructor(facultyRepository: FacultyRepository);
    create(faculty: Omit<Faculty, '_id'>): Promise<Faculty>;
    count(where?: Where<Faculty>): Promise<Count>;
    find(filter?: Filter<Faculty>): Promise<Faculty[]>;
    updateAll(faculty: Faculty, where?: Where<Faculty>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Faculty>): Promise<Faculty>;
    updateById(id: string, faculty: Faculty): Promise<void>;
    replaceById(id: string, faculty: Faculty): Promise<void>;
    deleteById(id: string): Promise<void>;
}
