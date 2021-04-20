import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {MongooseModule} from '@nestjs/mongoose';
import {RolesSchema} from './roles.model';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
  imports: [
    MongooseModule.forFeature([{ name: 'Role', schema: RolesSchema }])
  ],

})
export class RolesModule {}
