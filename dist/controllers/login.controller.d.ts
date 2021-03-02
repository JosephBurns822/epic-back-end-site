import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Login } from '../models';
import { LoginRepository } from '../repositories';
export declare class LoginController {
    loginRepository: LoginRepository;
    constructor(loginRepository: LoginRepository);
    create(login: Omit<Login, '_id'>): Promise<Login>;
    count(where?: Where<Login>): Promise<Count>;
    find(filter?: Filter<Login>): Promise<Login[]>;
    updateAll(login: Login, where?: Where<Login>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Login>): Promise<Login>;
    updateById(id: string, login: Login): Promise<void>;
    replaceById(id: string, login: Login): Promise<void>;
    deleteById(id: string): Promise<void>;
}
