import 'dotenv/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const port = process.env.PORT || 4000;

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(
    `Nest.js server listening on port ${port}, go to http://localhost:${port}/graphql to open GraphQL playground`,
  );
}
bootstrap();
