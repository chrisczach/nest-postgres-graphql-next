import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../../users/models/User';

@ObjectType()
export class Post {
  @Field(type => ID)
  id: string;

  @Field(type => User)
  user: User;

  @Field()
  title: string;

  @Field()
  content: string;
}
