import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import {CloudinaryProvider} from './images.provider';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService, CloudinaryProvider],
  exports: [CloudinaryProvider]
})
export class ImagesModule {}
