import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema} from './users.model'
import {RolesModule} from '../roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    RolesModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
