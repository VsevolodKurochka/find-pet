import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import {MongooseModule} from '@nestjs/mongoose';
import {AnimalSchema} from './animals.model';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Animal', schema: AnimalSchema }])
  ],
  exports: [AnimalsService]
})
export class AnimalsModule {}
