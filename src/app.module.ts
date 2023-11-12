import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IdolsModule } from './idols/idols.module';

@Module({
  imports: [ConfigModule.forRoot(), IdolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
