import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOneById(id: string) {
    return { id, userName: `name for ${id}`, password: `password for ${id}` };
  }
}
