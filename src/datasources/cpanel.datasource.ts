import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class CpanelDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cpanel';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cpanel', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
