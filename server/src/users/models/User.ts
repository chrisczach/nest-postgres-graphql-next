import { Field, ID, ObjectType } from 'type-graphql';
import { Post } from '../../posts/models/Post';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  userName: string;

  @Field()
  password: string;

  @Field(type => [Post], { nullable: true })
  posts: Post[];
}
