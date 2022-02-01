import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { LevelFactoryService } from './level-factory.service';
import { Levelservices } from './level-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [LevelFactoryService, Levelservices],
  exports: [LevelFactoryService, Levelservices]
})
export class LevelservicesModule {}
