// Uncomment these imports to begin using these cool features!

import {Count, CountSchema, repository, Where} from '@loopback/repository';
import {get, getModelSchemaRef, param, post, requestBody} from '@loopback/rest';
import {Account} from '../models';
import {AccountRepository} from '../repositories';

// import {inject} from '@loopback/core';

export class AccountController {
  constructor(
    @repository(AccountRepository) public accountRepository: AccountRepository,
  ) {}

  @post('/todos', {
    responses: {
      '200': {
        description: 'Todo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Account)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Account, {
            title: 'NewAccount',
            exclude: ['Id'],
          }),
        },
      },
    })
    todo: Omit<Account, 'id'>,
  ): Promise<Account> {
    return this.accountRepository.create(todo);
  }

  @get('/todos/count', {
    responses: {
      '200': {
        description: 'Todo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.where(Account) where?: Where<Account>): Promise<Count> {
    return this.accountRepository.count(where);
  }


}
