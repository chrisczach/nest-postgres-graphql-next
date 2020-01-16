import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATEBASE } = process.env;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST || 'localhost',
      port: DB_PORT as unknown as number || 5432,
      username: DB_USERNAME || 'postgres',
      password: DB_PASSWORD || 'postgres',
      database: DB_DATEBASE || 'test',
      entities: [],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
