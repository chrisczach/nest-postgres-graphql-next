import { Field, ID, ObjectType } from 'type-graphql';
import { Post } from '../../posts/models/Post';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  userName: string;

  @Field()
  @Column()
  password: string;

  @Field(type => [Post], { nullable: true })
  @OneToMany(
    type => Post,
    post => post.user,
  )
  posts: Post[];
}
