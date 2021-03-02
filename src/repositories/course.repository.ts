import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpanelDataSource} from '../datasources';
import {Course, CourseRelations} from '../models';

export class CourseRepository extends DefaultCrudRepository<
  Course,
  typeof Course.prototype._id,
  CourseRelations
> {
  constructor(
    @inject('datasources.cpanel') dataSource: CpanelDataSource,
  ) {
    super(Course, dataSource);
  }
}
