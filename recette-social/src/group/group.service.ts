/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/mongoose';
import { group, groupDocument } from './schemas/group.schema';
import { Model } from 'mongoose';
@Injectable()
export class GroupService {
  constructor(
    @InjectModel(group.name)
    private readonly groupModel: Model<groupDocument>,
  ) { }

  create(createuserDto: CreateGroupDto) {
    return this.groupModel.create(createuserDto);
  }

  findAll(): Promise<group[]> {
    return this.groupModel.find().exec();
  }

  async findgroup(group_Id: string): Promise<group> {
    return this.groupModel.findOne({ group_Id });
  }

  async update(group_Id: string, newgroup: UpdateGroupDto) {
    try {
      const group = await this.findgroup(group_Id)
      console.log(group)
      if (group != null) {
        const updategroup = Object.assign(group, newgroup);
        return this.groupModel.findOneAndUpdate({ group_Id }, updategroup, { new: true });
      }
      else {
        throw new Error()
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  async remove(group_Id: number) {
    return this.groupModel.remove({ group_Id });
  }
}
