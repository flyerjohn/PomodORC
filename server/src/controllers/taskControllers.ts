import { Request, Response } from 'express';
import Tasks from '../models/tasks';

export default class TaskControllers{

    async getTasks (req: Request ,res: Response) :Promise <Response>{
        try{
            const tasks = await Tasks.find();
            return res.status(200).json(tasks);
        }catch(error){
            return res.status(400).json(error.message);
        }
    }

    async createTasks (req: Request, res: Response) :Promise <Response>{
        try {
            const task = await Tasks.create(req.body);
            return res.status(201).json(task);
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }



}