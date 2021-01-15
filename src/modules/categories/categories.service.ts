import { Injectable } from '@nestjs/common'

import { Category } from '../../domain/category'

@Injectable()
export class CategoriesService {
  // fixme: temporary
  private categories: Category[] = [
    {
      name: 'Будинок',
      capacity: 7000,
      id: 1,
    },
    {
      name: 'Їжа',
      capacity: 3000,
      id: 2,
    },
    {
      id: 3,
      name: 'Машина',
      capacity: 2500,
    },
  ]

  findAll(): Category[] {
    return this.categories
  }

  findOne(id: number): Category | null {
    return this.categories.find(category => category.id === +id) || null
  }

  add(category: Category): boolean {
    const target = { ...category }
    target.id = this.categories.length + 1
    this.categories.push(target)
    return !!this.categories.length
  }

  update(category: Category): Category {
    const targetIndex = this.categories.findIndex(
      item => item.id === category.id,
    )
    const value: Category = { ...category }
    this.categories[targetIndex] = value
    return value
  }
}
