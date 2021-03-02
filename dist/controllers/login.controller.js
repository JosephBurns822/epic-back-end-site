"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LoginController = class LoginController {
    constructor(loginRepository) {
        this.loginRepository = loginRepository;
    }
    async create(login) {
        return this.loginRepository.create(login);
    }
    async count(where) {
        return this.loginRepository.count(where);
    }
    async find(filter) {
        return this.loginRepository.find(filter);
    }
    async updateAll(login, where) {
        return this.loginRepository.updateAll(login, where);
    }
    async findById(id, filter) {
        return this.loginRepository.findById(id, filter);
    }
    async updateById(id, login) {
        await this.loginRepository.updateById(id, login);
    }
    async replaceById(id, login) {
        await this.loginRepository.replaceById(id, login);
    }
    async deleteById(id) {
        await this.loginRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/login'),
    rest_1.response(200, {
        description: 'Login model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Login) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Login, {
                    title: 'NewLogin',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/login/count'),
    rest_1.response(200, {
        description: 'Login model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Login)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/login'),
    rest_1.response(200, {
        description: 'Array of Login model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Login, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Login)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/login'),
    rest_1.response(200, {
        description: 'Login PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Login, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Login)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Login, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/login/{id}'),
    rest_1.response(200, {
        description: 'Login model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Login, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Login, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/login/{id}'),
    rest_1.response(204, {
        description: 'Login PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Login, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Login]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/login/{id}'),
    rest_1.response(204, {
        description: 'Login PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Login]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/login/{id}'),
    rest_1.response(204, {
        description: 'Login DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LoginController.prototype, "deleteById", null);
LoginController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.LoginRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.LoginRepository])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map