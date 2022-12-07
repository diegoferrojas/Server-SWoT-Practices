import { Module } from '@nestjs/common';
import { PlayerControllerImpl } from './players/adapters/controladores/playersImpl.controller';
import { PlayerServiceImpl } from './players/domain/services/playerImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [PlayerControllerImpl],
  providers: [
    {
      provide: 'PlayerService',
      useClass: PlayerServiceImpl
    }
  ],
})
export class AppModule {}
