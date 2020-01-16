import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './models/User';
import { UsersService } from './users.service';
import { PostsService } from '../posts/posts.service';

@Resolver((_: any) => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsServer: PostsService,
  ) {}

  @Query(returns => User)
  async user(@Args({ name: 'id', type: () => Number }) id: number) {
    return await this.usersService.findOneById(id);
  }
}
