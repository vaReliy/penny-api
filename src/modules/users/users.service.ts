import { Injectable } from '@nestjs/common'

import { User, UserRequest, UserResponse } from '../../domain/user.model'

@Injectable()
export class UsersService {
  // fixme: temporary
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Admin Petro',
      email: 'admin@gmail.com',
      password: '12345678',
    },
  ]

  async create(user: UserRequest): Promise<UserResponse> {
    const newUser: User = { id: this.users.length + 1, ...user }
    this.users.push(newUser)
    return UserResponse.toSafeData(newUser)
  }

  async findAll(): Promise<UserResponse[]> {
    return this.users.map(user => UserResponse.toSafeData(user))
  }

  async findByEmail(email: string): Promise<UserResponse[]> {
    return this.users
      .filter(user => user.email.startsWith(email))
      .map(user => UserResponse.toSafeData(user))
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email)
  }
}
