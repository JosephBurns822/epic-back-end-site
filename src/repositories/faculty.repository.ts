import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpanelDataSource} from '../datasources';
import {Faculty, FacultyRelations} from '../models';

export class FacultyRepository extends DefaultCrudRepository<
  Faculty,
  typeof Faculty.prototype._id,
  FacultyRelations
> {
  constructor(
    @inject('datasources.cpanel') dataSource: CpanelDataSource,
  ) {
    super(Faculty, dataSource);
  }
}
