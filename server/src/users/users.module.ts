import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PostsService } from '../posts/posts.service';

@Module({
  providers: [UsersResolver, UsersService, PostsService]
})
export class UsersModule {}
