import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReferenceService } from './reference.service';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';

@Controller('reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  @Post()
  async createProduct(@Body() product:CreateReferenceDto) {
    return await this.referenceService.createProduct(product)
  }



  @Get("all")
  async getProducts() {return await this.referenceService. getProducts()}




  @Get(':id')
  async getProductById(@Param("id") id:string) {return await this.referenceService.getProductById(id)}





  @Patch(':id')
  async updateProductById(@Param("id") id:string, @Body() product:CreateReferenceDto) {return await this.referenceService.updateProductById(id, product)}





  @Delete(':id')
  async deleteProductById(@Param("id") id:string) {return await this.referenceService.deleteProductById(id)}




}
