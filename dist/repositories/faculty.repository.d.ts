import { DefaultCrudRepository } from '@loopback/repository';
import { CpanelDataSource } from '../datasources';
import { Faculty, FacultyRelations } from '../models';
export declare class FacultyRepository extends DefaultCrudRepository<Faculty, typeof Faculty.prototype._id, FacultyRelations> {
    constructor(dataSource: CpanelDataSource);
}
