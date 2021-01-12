export class UserDto {
  id?: number
  name: string
  email: string
}

export class User extends UserDto {
  password: string
}

export type UserRequest = Omit<User, 'id'>

export class UserResponse {
  static toSafeData(user: User): Omit<User, 'password'> {
    const { password, ...userResponse } = user
    return userResponse
  }
}
