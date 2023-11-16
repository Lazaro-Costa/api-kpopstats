import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';

@Injectable()
export class GroupsRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createGroupDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: createGroupDto,
      include: {
        company: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.group.findMany({
      include: {
        company: {
          select: {
            id: true,
            name: true,
          },
        },
        idols: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.group.findUnique({
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
        idols: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: {
        id,
      },
      data: updateGroupDto,
      include: {
        company: {
          select: {
            id: true,
            name: true,
          },
        },
        idols: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    return this.prisma.group.delete({
      where: {
        id,
      },
    });
  }
}
