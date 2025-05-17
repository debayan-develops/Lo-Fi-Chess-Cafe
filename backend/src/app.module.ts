// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChessModule } from './chess/chess.module'; // Import the module

@Module({
  imports: [ChessModule], // Add it here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}