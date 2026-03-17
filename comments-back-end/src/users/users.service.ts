import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsersDto } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUsersDto: CreateUsersDto): Promise<User> {
    return await this.prismaService.user.create({
      data: {
        ...createUsersDto,
        password: await bcrypt.hash(createUsersDto.password, 10),
      },
    });
  }
}
