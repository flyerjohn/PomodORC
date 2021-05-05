import { Request, Response, Router } from 'express';
import TaskControllers from '../controllers/taskControllers';
import CategoryControllers from '../controllers/categoryControllers';

const router = Router();
const categoryController = new CategoryControllers();
const taskController = new TaskControllers();


// Rotas das tarefas
router.get("/tasks",(req: Request, res: Response) => {
    taskController.getTasks(req,res);
});

router.post("/task",(req: Request,res: Response) => {
    taskController.createTask(req,res);
});

router.put("/tasks/:_id",(req: Request ,res:Response)=>{
    taskController.updateTask(req,res);
});
router.delete("/tasks/:_id",(req: Request, res: Response)=>{
    taskController.deleteTask(req,res);
});

// Rotas das listas de tarefas(Categories)
router.get("/categories",(req: Request, res: Response) => {
    categoryController.getCategorys(req,res);
});

router.post("/category",(req: Request, res: Response)=> {
    categoryController.createCategory(req,res)
});

router.put("/categories/:_id",(req: Request, res: Response)=> {
    categoryController.updateCategory(req,res);
});
router.delete("/categories/:_id", (req: Request, res: Response) => {
    categoryController.deleteCategory(req,res);
});


export default router;