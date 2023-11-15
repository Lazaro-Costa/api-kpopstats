import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IdolsModule } from './idols/idols.module';
import { CompanysModule } from './companys/companys.module';
import { GroupsModule } from './groups/groups.module';
import { PicsModule } from './pics/pics.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    IdolsModule,
    CompanysModule,
    GroupsModule,
    PicsModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
