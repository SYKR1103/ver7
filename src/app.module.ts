import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceModule } from './reference/reference.module';
import { DbportmoduleModule } from './dbportmodule/dbportmodule.module';

@Module({
  imports: [ReferenceModule, DbportmoduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
