import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from '../Modals/cat.modal';
import { CatInterface } from '../Modals/interface.modal';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private readonly catModal: Model<CatInterface>){}

  public async createCat (props: CatInterface){
    const insertCat = new this.catModal({
      ...props,
    });
    return await insertCat.save(); 
  }

  async getAllCats() {
    return await this.catModal.find();
  }

  async deleteCat(_id: string) {
    return await this.catModal.findByIdAndRemove({ _id });
  }

  async updateCat(cat: CatInterface) {
    return await this.catModal.findByIdAndUpdate({_id: cat._id}, cat).setOptions({ overwrite: true, new: true });
  }
}