import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';
import { RolesModule } from './roles/roles.module';
import { ImagesModule } from './images/images.module';
import {AuthModule} from './auth/auth.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        MongooseModule.forRoot(`${process.env.MONGO_URL}`, {
            useNewUrlParser: true
        }),
        UsersModule,
        AnimalsModule,
        RolesModule,
        ImagesModule,
        AuthModule
    ]
})
export class AppModule {

}