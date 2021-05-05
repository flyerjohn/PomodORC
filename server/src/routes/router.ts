import { Request, Response, Router } from 'express';
import TaskControllers from '../controllers/taskControllers';
import CategoryControllers from '../controllers/categoryControllers';

const router = Router();
const categoryController = new CategoryControllers();
const taskController = new TaskControllers();

router.get("/tasks",(req: Request, res: Response) => {
    taskController.getTasks(req,res);
});

router.post("/task",(req: Request,res: Response) => {
    taskController.createTasks(req,res);
});

router.get("/all",(res: Response) => {
    categoryController.getCategorys(res);
});



export default router;