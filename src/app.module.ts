import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './Cat/Modules/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    MongooseModule.forRoot("mongodb+srv://usmanghulam:usmanghulam@cluster0.y7gsf.mongodb.net/nest-demo?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }),
  CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
