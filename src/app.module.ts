import { Module } from '@nestjs/common';
import { DeveloperController, LevelController } from './controllers';
import { DeveloperServicesModule } from './services/use-cases/developer/developer-services.module';
import { LevelservicesModule } from './services/use-cases/level/level-services.module';

@Module({
  imports: [DeveloperServicesModule, LevelservicesModule],
  controllers: [DeveloperController, LevelController],
  providers: []
})
export class AppModule {}
