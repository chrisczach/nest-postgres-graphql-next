import { Resolver, Args, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './models/Post';

@Resolver((of: any) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}
  @Query(returns => Post)
  async posts() {
    return await this.postsService.posts();
  }
}
