import { Injectable } from '@nestjs/common';
import { CreateIdolDto } from './dto/create-idol.dto';
import { UpdateIdolDto } from './dto/update-idol.dto';

@Injectable()
export class IdolsService {
  create(createIdolDto: CreateIdolDto) {
    return 'This action adds a new idol';
  }

  findAll() {
    return `This action returns all idols`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idol`;
  }

  update(id: number, updateIdolDto: UpdateIdolDto) {
    return `This action updates a #${id} idol`;
  }

  remove(id: number) {
    return `This action removes a #${id} idol`;
  }
}
