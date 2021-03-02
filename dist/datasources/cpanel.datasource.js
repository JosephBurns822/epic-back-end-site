"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpanelDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'cpanel',
    connector: 'mysql',
    url: 'mysql://jburns11_burns:Manning010@192.185.188.95/jburns11_epic_site_db',
    host: '192.185.188.95',
    port: 3306,
    user: 'jburns11_burns',
    password: 'Manning010',
    database: 'jburns11_epic_site_db'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let CpanelDataSource = class CpanelDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
CpanelDataSource.dataSourceName = 'cpanel';
CpanelDataSource.defaultConfig = config;
CpanelDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.cpanel', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], CpanelDataSource);
exports.CpanelDataSource = CpanelDataSource;
//# sourceMappingURL=cpanel.datasource.js.map