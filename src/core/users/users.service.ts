import { Injectable } from '@nestjs/common'

import { User } from '../../domain/user.model'

@Injectable()
export class UsersService {
  // fixme: temporary
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Admin Petro',
      email: 'admin@gmail.com',
      password: '123456',
    },
  ]

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email)
  }
}
