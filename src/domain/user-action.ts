export class UserAction {
  id: number
  type: 'income' | 'outcome'
  amount: number
  category: number
  date: string
  description: string
}
