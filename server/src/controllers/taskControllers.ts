import { Request, Response } from 'express';
import Tasks from '../models/tasks';
import Category from '../models/category';

export default class TaskControllers {

    async getTasks(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await Tasks.find();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    async getSpecificTask(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = await Tasks.find({ '_id': req.params._id });
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const task = await Tasks.create(req.body);
            await Category.findByIdAndUpdate(req.params._id, { $addToSet: { tasks: task._id } })
            return res.status(201).json(task);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    async updateTask(req: Request, res: Response): Promise<Response> {
        try {
            const task = await Tasks.findOneAndUpdate({ '_id': req.params._id }, req.body);
            return res.status(201).json(task);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async updateCheckedTask(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        
        try {
            const task = await Tasks.findById({"_id":id});
            if(!id){
                return res.status(400).json({message:"Não foi encontrado id!"})
            }
            await task.updateOne(req.body);
            return res.status(201).json(task)
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    async deleteTask(req: Request, res: Response): Promise<Response> {
        try {
            const task = await Tasks.findOneAndDelete({ '_id': req.params._id },);
            return res.status(200).json(task);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}