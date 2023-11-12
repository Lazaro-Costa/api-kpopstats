import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IdolsModule } from './idols/idols.module';
import { CompanysModule } from './companys/companys.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [ConfigModule.forRoot(), IdolsModule, CompanysModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
