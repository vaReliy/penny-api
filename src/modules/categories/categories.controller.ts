import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'

import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard'
import { Category } from '../../domain/category'
import { CategoriesService } from './categories.service'

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAll(): Promise<Category[]> {
    return this.categoriesService.findAll()
  }

  @Get(':id')
  async getById(@Param('id') id): Promise<Category | null> {
    return this.categoriesService.findOne(id)
  }

  @Post()
  async create(@Body() category: Category): Promise<boolean> {
    return this.categoriesService.add(category)
  }

  @Put()
  async update(@Body() category: Category): Promise<Category> {
    return this.categoriesService.update(category)
  }
}
