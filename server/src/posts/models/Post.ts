import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../../users/models/User';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => User)
  user: User;

  @Field()
  title: string;

  @Field()
  content: string;
}
