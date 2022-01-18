import { Module } from '@nestjs/common';
import { CatController } from '../Controller/cat.controller';
import { CatService } from '../Services/cat.service';
import { CatSchema, Cat } from '../Modals/cat.modal';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
