import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CatInterface } from '../Modals/interface.modal';
import { CatService } from '../Services/cat.service';

@Controller('/cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get("/")
  getAllCats() {
    return this.catService.getAllCats();
  }
  
  @Put("/create")
  createCat(@Body() props: CatInterface){
    return this.catService.createCat(props)
  }

  @Post("/delete")
  deleteCat(@Body() { id }: any){
    return this.catService.deleteCat(id);
  }

  // @Post("/single")
  // updateCat(@Body() { id }: any) {
  //   return this.catService.getOneCat(id);
  // }
}
