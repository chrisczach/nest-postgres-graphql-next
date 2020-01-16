import { Injectable } from '@nestjs/common';
import { Post } from './models/Post';
import { User } from 'src/users/models/User';

const mockUser: User[] = [
  {
    id: 1,
    userName: 'user1',
    password: 'user1pw',
    posts: [],
  },
  {
    id: 2,
    userName: 'user2',
    password: 'user2pw',
    posts: [],
  },
];

const mockPost: Post[] = [
  {
    id: 1,
    user: mockUser[0],
    title: 'post 1',
    content: 'content for post 1',
  },
  {
    id: 2,
    user: mockUser[1],
    title: 'post 2',
    content: 'content for post 2',
  },
  {
    id: 3,
    user: mockUser[0],
    title: 'post 3',
    content: 'content for post 3',
  },
  {
    id: 4,
    user: mockUser[0],
    title: 'post 4',
    content: 'content for post 4',
  },
  {
    id: 5,
    user: mockUser[1],
    title: 'post 5',
    content: 'content for post 5',
  },
];

@Injectable()
export class PostsService {
  posts(id: number | null): Post[] {
    if (id === null) return mockPost;
    return mockPost.filter(({ user: { id: userId } }) => userId === id);
  }
}
