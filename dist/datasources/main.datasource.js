"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'main',
    connector: 'mongodb',
    url: 'mongodb+srv://dbBurns:S97uysyjYL2158dd@cluster0.wzwth.mongodb.net/epicsitedb?retryWrites=true&w=majority',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MainDataSource = class MainDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MainDataSource.dataSourceName = 'main';
MainDataSource.defaultConfig = config;
MainDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.main', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MainDataSource);
exports.MainDataSource = MainDataSource;
//# sourceMappingURL=main.datasource.js.map