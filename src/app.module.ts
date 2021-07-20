import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://angelovso:rv7MR6sjBLM37xEO@cluster0.nx5rj.mongodb.net/test'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
