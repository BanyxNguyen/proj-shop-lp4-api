// import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
// import {juggler} from '@loopback/repository';

// const config = {
//   name: 'ShopDB',
//   connector: 'mssql',
//   url: '',
//   host: 'localhost',
//   port: 1433,
//   user: 'sa',
//   password: 'sa',
//   // database: 'StoreGreen',
//   database: 'DBTESTLOGIN',
// };

// // Observe application's life cycle to disconnect the datasource when
// // application is stopped. This allows the application to be shut down
// // gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// // Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
// @lifeCycleObserver('datasource')
// export class ShopDbDataSource
//   extends juggler.DataSource
//   implements LifeCycleObserver
// {
//   static dataSourceName = 'ShopDB';
//   static readonly defaultConfig = config;

//   constructor(
//     @inject('datasources.config.ShopDB', {optional: true})
//     dsConfig: object = config,
//   ) {
//     super(dsConfig);
//   }
// }

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

console.log('VARIABLE_DATABASE_NAME', process.env.VARIABLE_DATABASE_NAME);

const config = {
  name: 'ShopDB',
  connector: 'mongodb',
  url: '',
  host: process.env.VARIABLE_DATABASE_HOST || 'localhost',
  port: process.env.VARIABLE_DATABASE_PORT || '27017',
  user: '',
  password: '',
  database: process.env.VARIABLE_DATABASE_NAME || 'DefaultDB',
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
    console.log('DATABASE_NAME: ', process.env.VARIABLE_DATABASE_NAME);
  }
}
