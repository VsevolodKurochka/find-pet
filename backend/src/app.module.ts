import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.7bw37.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true
        }),
        UsersModule
    ]
})
export class AppModule {

}