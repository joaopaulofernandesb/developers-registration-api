import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-services.module';
import { DeveloperFactoryService } from './developer-factory.service';
import { DeveloperServices } from './developer-services.service';

@Module({
  imports: [DataServicesModule],
  providers: [DeveloperFactoryService, DeveloperServices],
  exports: [DeveloperFactoryService, DeveloperServices]
})
export class DeveloperServicesModule {}
