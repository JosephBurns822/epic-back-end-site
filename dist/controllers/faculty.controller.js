"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FacultyController = class FacultyController {
    constructor(facultyRepository) {
        this.facultyRepository = facultyRepository;
    }
    async create(faculty) {
        return this.facultyRepository.create(faculty);
    }
    async count(where) {
        return this.facultyRepository.count(where);
    }
    async find(filter) {
        return this.facultyRepository.find(filter);
    }
    async updateAll(faculty, where) {
        return this.facultyRepository.updateAll(faculty, where);
    }
    async findById(id, filter) {
        return this.facultyRepository.findById(id, filter);
    }
    async updateById(id, faculty) {
        await this.facultyRepository.updateById(id, faculty);
    }
    async replaceById(id, faculty) {
        await this.facultyRepository.replaceById(id, faculty);
    }
    async deleteById(id) {
        await this.facultyRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/faculty'),
    rest_1.response(200, {
        description: 'Faculty model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Faculty) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Faculty, {
                    title: 'NewFaculty',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/faculty/count'),
    rest_1.response(200, {
        description: 'Faculty model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Faculty)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/faculty'),
    rest_1.response(200, {
        description: 'Array of Faculty model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Faculty, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Faculty)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/faculty'),
    rest_1.response(200, {
        description: 'Faculty PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Faculty, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Faculty)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Faculty, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/faculty/{id}'),
    rest_1.response(200, {
        description: 'Faculty model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Faculty, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Faculty, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/faculty/{id}'),
    rest_1.response(204, {
        description: 'Faculty PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Faculty, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Faculty]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/faculty/{id}'),
    rest_1.response(204, {
        description: 'Faculty PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Faculty]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/faculty/{id}'),
    rest_1.response(204, {
        description: 'Faculty DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FacultyController.prototype, "deleteById", null);
FacultyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.FacultyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FacultyRepository])
], FacultyController);
exports.FacultyController = FacultyController;
//# sourceMappingURL=faculty.controller.js.map