/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { group, groupSchema } from './schemas/group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: group.name, schema: groupSchema }]),
  ],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}