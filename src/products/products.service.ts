import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/product.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: CreateProductDto) {
    return this.databaseService.product.create({data: createProductDto})
  }

  async findAll() {
    return this.databaseService.product.findMany({})
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.databaseService.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where: {
        id,
      }
    })
  }
}
