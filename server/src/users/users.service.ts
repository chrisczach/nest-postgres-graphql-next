import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/models/Post';

const mockUser: any = [
  {
    id: '1',
    userName: 'user1',
    password: 'user1pw',
  },
  {
    id: '2',
    userName: 'user2',
    password: 'user2pw',
  },
];

const mockPost: Post[] = [
  {
    id: '1',
    user: mockUser[0],
    title: 'post 1',
    content: 'content for post 1',
  },
  {
    id: '2',
    user: mockUser[1],
    title: 'post 2',
    content: 'content for post 2',
  },
  {
    id: '3',
    user: mockUser[0],
    title: 'post 3',
    content: 'content for post 3',
  },
  {
    id: '4',
    user: mockUser[0],
    title: 'post 4',
    content: 'content for post 4',
  },
  {
    id: '5',
    user: mockUser[1],
    title: 'post 5',
    content: 'content for post 5',
  },
];

@Injectable()
export class UsersService {
  findOneById(id: string) {
    return {
      id,
      userName: `name for ${id}`,
      password: `password for ${id}`,
      posts: mockPost.filter(({ user: { id: userId } }) => userId === id),
    };
  }
}
