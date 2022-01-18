import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT = 5000 || 4000;
  await app.listen(PORT, () => {
    console.log(`Your server is running to the PORT ${PORT}`);
  });
}
bootstrap();
