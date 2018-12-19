import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { MongoRepository, ObjectID, Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: MongoRepository<Project>) {
  }

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async create(project: Project) {
    return await this.projectRepository.insertOne(project);
  }

  async findOne(id: ObjectID) {
    return await this.projectRepository.findOne(id);
  }

  async update(id: ObjectID, project: Project) {
    return await this.projectRepository.update(id, project);
  }

  async delete(id: ObjectID) {
    return await this.projectRepository.delete(id);
  }
}
