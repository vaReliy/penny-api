export class UserDto {
  id?: number
  name: string
  email: string
}

export class User extends UserDto {
  password: string
}
