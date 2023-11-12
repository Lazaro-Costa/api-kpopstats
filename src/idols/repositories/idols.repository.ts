import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIdolDto } from '../dto/create-idol.dto';
import { UpdateIdolDto } from '../dto/update-idol.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdolsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createIdolDto: CreateIdolDto) {
    return this.prisma.idol.create({
      data: createIdolDto,
      include: {
        company: {
          select: {
            id: true,
            name: true,
          },
        },
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.idol.findMany({
      include: {
        company: {
          select: {
            id: true,
            name: true,
          },
        },
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.idol.findUnique({
      where: {
        id,
      },
      include: {
        company: {
          select: {
            id: true,
            name: true,
          },
        },
        group: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, updateIdolDto: UpdateIdolDto) {
    return this.prisma.idol.update({
      where: {
        id,
      },
      data: updateIdolDto,
    });
  }

  async remove(id: number) {
    return this.prisma.idol.delete({
      where: {
        id,
      },
    });
  }
}
