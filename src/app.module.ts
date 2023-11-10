import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceModule } from './reference/reference.module';
import { DbportmoduleModule } from './dbportmodule/dbportmodule.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [ReferenceModule, DbportmoduleModule, ConfigModule.forRoot({

    validationSchema : Joi.object({

      POSTGRES_HOST : Joi.string().required(),
      POSTGRES_PORT : Joi.string().required(),
      POSTGRES_USER : Joi.string().required(),
      POSTGRES_PASSWORD : Joi.string().required(),
      POSTGRES_DB : Joi.string().required(), 
    })




  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
