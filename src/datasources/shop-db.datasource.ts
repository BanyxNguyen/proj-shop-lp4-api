import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ShopDB',
  connector: 'mongodb',
  url: '',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: '',
  password: '',
  database: process.env.DATABASE_NAME,
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ShopDbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'ShopDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ShopDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
