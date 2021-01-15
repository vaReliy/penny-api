import { Injectable } from '@nestjs/common'

import { UserAction } from '../../domain/user-action'

@Injectable()
export class UserActionsService {
  // fixme: temporary
  private actions: UserAction[] = [
    {
      id: 1,
      type: 'income',
      amount: 1250,
      category: 2,
      date: '12.06.2017 19:49:02',
      description: 'Подарували їжу в гостях',
    },
    {
      id: 2,
      type: 'outcome',
      amount: 1300,
      category: 1,
      date: '13.06.2017 19:49:02',
      description: 'Придбання посудомийки',
    },
    {
      type: 'income',
      amount: 1480,
      category: 2,
      date: '17.06.2017 14:00:48',
      id: 3,
      description: 'Похід в окей с балами. Безкоштовна їжа',
    },
    {
      type: 'outcome',
      amount: 2470,
      category: 2,
      date: '17.06.2017 14:00:58',
      id: 4,
      description: 'Закупка на тиждень',
    },
    {
      type: 'outcome',
      amount: 4000,
      category: 3,
      date: '10.06.2017 14:01:58',
      id: 5,
      description: 'Авто. Заправка + ТО',
    },
  ]

  findAll(): UserAction[] {
    return this.actions.reverse()
  }

  findOne(id: number): UserAction | null {
    return this.actions.find(action => action.id === +id) || null
  }

  add(action: UserAction): boolean {
    const target = { ...action }
    target.id = this.actions.length + 1
    this.actions.push(target)
    return !!this.actions.length
  }
}
