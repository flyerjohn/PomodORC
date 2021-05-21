import { Request, Response } from 'express';
import Category from '../models/category';

export default class CategoryControllers{

    async getCategorys (req: Request , res: Response) :Promise <Response>{
        try{
            const category = await Category.find().populate("tasks");
            return res.status(200).json(category);
        }catch(erro){
            return res.status(400).json(erro.menssage);
        }
    }
    async getSpecificCategory (req: Request , res: Response) :Promise <Response>{
        try{
            const category = await Category.findById(req.params._id).populate("tasks");
            return res.status(200).json(category);
        }catch(erro){
            return res.status(400).json(erro.menssage);
        }
    }
    
    async createCategory (req: Request, res: Response) :Promise <Response>{
        try {
            const category = await Category.create(req.body);
            return res.status(201).json(category);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    async updateCategory (req: Request, res: Response) : Promise<Response>{
        try {
            const category = await Category.findOneAndUpdate({'_id' : req.params._id}, req.body);
            return res.status(201).json(category);
        } catch (error) {
            return res.status(400).json(error.message)
        }
        
    }
    async deleteCategory (req: Request, res:Response) : Promise <Response>{
        try {
           const category = await Category.findOneAndDelete({'_id': req.params._id}, );
            return res.status(200).json(category);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

}