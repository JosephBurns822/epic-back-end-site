import { DefaultCrudRepository } from '@loopback/repository';
import { CpanelDataSource } from '../datasources';
import { Login, LoginRelations } from '../models';
export declare class LoginRepository extends DefaultCrudRepository<Login, typeof Login.prototype._id, LoginRelations> {
    constructor(dataSource: CpanelDataSource);
}
