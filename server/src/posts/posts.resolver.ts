import { Resolver, Args, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './models/Post';
import { UsersService } from '../users/users.service';

@Resolver((_: any) => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}
  @Query((_: any) => [Post])
  async posts(
    @Args({ name: 'id', type: () => String, nullable: true })
    id?: string | null,
  ) {
    return await this.postsService.posts(id);
  }
}
