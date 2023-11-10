import { Injectable } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Reference } from './entities/reference.entity';
import { Repository } from 'typeorm/repository/Repository';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ReferenceService {

  constructor(
  @InjectRepository(Reference)
  private referencerepo : Repository<Reference>) {}

  async createProduct(reference : CreateReferenceDto) {

    const newproduct = await this.referencerepo.create(reference)
    await this.referencerepo.save(newproduct)
    return newproduct
  }

  async getProducts() {return this.referencerepo.find()}

  async getProductById(id:string) {
    const foundproduct = await this.referencerepo.findOneBy({id})
    if (foundproduct) {return foundproduct}
    throw new HttpException("not found", HttpStatus.NOT_FOUND)
  }

  async updateProductById(id:string,reference : CreateReferenceDto ) {
    await this.referencerepo.update(id, reference)
    const updatedproduct = await this.referencerepo.findOneBy({id})
    if (updatedproduct) {return updatedproduct}
    throw new HttpException("not found", HttpStatus.NOT_FOUND)
  }

  async deleteProductById(id:string) {

    const deleteresponse = await this.referencerepo.delete(id)
    console.log('whaaaaaaaa')
    if (!deleteresponse.affected) {throw new HttpException("not found", HttpStatus.NOT_FOUND)}

    return "deleted"

  }


}
