"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CourseController = class CourseController {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async create(course) {
        return this.courseRepository.create(course);
    }
    async count(where) {
        return this.courseRepository.count(where);
    }
    async find(filter) {
        return this.courseRepository.find(filter);
    }
    async updateAll(course, where) {
        return this.courseRepository.updateAll(course, where);
    }
    async findById(id, filter) {
        return this.courseRepository.findById(id, filter);
    }
    async updateById(id, course) {
        await this.courseRepository.updateById(id, course);
    }
    async replaceById(id, course) {
        await this.courseRepository.replaceById(id, course);
    }
    async deleteById(id) {
        await this.courseRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/course'),
    rest_1.response(200, {
        description: 'Course model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Course) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course, {
                    title: 'NewCourse',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/course/count'),
    rest_1.response(200, {
        description: 'Course model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Course)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/course'),
    rest_1.response(200, {
        description: 'Array of Course model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Course, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Course)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/course'),
    rest_1.response(200, {
        description: 'Course PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Course)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Course, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/course/{id}'),
    rest_1.response(200, {
        description: 'Course model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Course, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/course/{id}'),
    rest_1.response(204, {
        description: 'Course PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Course, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Course]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/course/{id}'),
    rest_1.response(204, {
        description: 'Course PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Course]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/course/{id}'),
    rest_1.response(204, {
        description: 'Course DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CourseController.prototype, "deleteById", null);
CourseController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CourseRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CourseRepository])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map