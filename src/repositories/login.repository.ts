import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpanelDataSource} from '../datasources';
import {Login, LoginRelations} from '../models';

export class LoginRepository extends DefaultCrudRepository<
  Login,
  typeof Login.prototype._id,
  LoginRelations
> {
  constructor(
    @inject('datasources.cpanel') dataSource: CpanelDataSource,
  ) {
    super(Login, dataSource);
  }
}
