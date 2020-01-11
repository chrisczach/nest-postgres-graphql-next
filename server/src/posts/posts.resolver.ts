import { Resolver, Args, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './models/Post';


@Resolver((_: any) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}
  @Query((_: any) => [Post])
  async posts(
    @Args({ name: 'id', type: () => String, nullable: true })
    id?: string | null,
  ) {
    return await this.postsService.posts(id);
  }
}
