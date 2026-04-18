import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/creat-product.dto';
import { join } from 'path';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(data: CreateProductDto, userId: number) {
    return this.prismaService.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        userId: userId,
      },
    });
  }

  async getProducts() {
    const products = await this.prismaService.product.findMany();
    return Promise.all(
      products.map(async (product) => ({
        ...product,
        imageExists: await this.imageExists(product.id),
      })),
    );
  }

  private async imageExists(productId: number): Promise<boolean> {
    try {
      await fs.access(
        join(process.cwd(), 'public', 'products', `${productId}.png`),
        fs.constants.F_OK,
      );
      return true;
    } catch (error) {
      console.error(
        `Error checking image existence for product ${productId}:`,
        error,
      );
      return false;
    }
  }
}
