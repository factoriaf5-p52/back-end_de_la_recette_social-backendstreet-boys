/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { groupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('group')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: groupService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get(':group_Id')
  findOne(@Param('group_Id') group_Id: string) {
    return this.groupService.findgroup(group_Id);
  }

  @Patch(':group_Id')
  update(
    @Param('group_Id') group_Id: string, 
    @Body() updateGroupDto: UpdateGroupDto
    ) {
    return this.groupService.update(group_Id, updateGroupDto);
  }

  @Delete(':group_Id')
  remove(@Param('group_Id') group_Id: string) {
    return this.groupService.remove(+group_Id);
  }
}
