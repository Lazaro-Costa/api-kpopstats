import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IdolsModule } from './idols/idols.module';
import { CompanysModule } from './companys/companys.module';
import { GroupsModule } from './groups/groups.module';
import { PicsModule } from './pics/pics.module';
import { ProfilesModule } from './profiles/profiles.module';
import { BannersModule } from './banners/banners.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Caminho para os arquivos estáticos, se aplicável
      serveRoot: '/static', // Rota para os arquivos estáticos, se aplicável
    }),
    IdolsModule,
    CompanysModule,
    GroupsModule,
    PicsModule,
    ProfilesModule,
    BannersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
