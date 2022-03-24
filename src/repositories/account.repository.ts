import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShopDbDataSource} from '../datasources';
import {Account, AccountRelations} from '../models';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.Id,
  AccountRelations
> {
  constructor(
    @inject('datasources.ShopDB') dataSource: ShopDbDataSource,
  ) {
    super(Account, dataSource);
  }
}
