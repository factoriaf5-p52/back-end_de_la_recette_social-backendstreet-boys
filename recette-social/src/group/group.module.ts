/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { groupService } from './group.service';
import { GroupController } from './group.controller';

@Module({
  controllers: [GroupController],
  providers: [groupService]
})
export class groupModule {}
