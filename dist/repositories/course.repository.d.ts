import { DefaultCrudRepository } from '@loopback/repository';
import { CpanelDataSource } from '../datasources';
import { Course, CourseRelations } from '../models';
export declare class CourseRepository extends DefaultCrudRepository<Course, typeof Course.prototype._id, CourseRelations> {
    constructor(dataSource: CpanelDataSource);
}
