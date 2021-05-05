import { Request, Response } from 'express';
import Category from '../models/category';

export default class CategoryControllers{

    async getCategorys (res: Response) :Promise <Response>{
        try{
            const category = await Category.find();
            return res.status(200).json(category);
        }catch(erro){
            return res.status(400).json(erro.menssage);
        }
    }

    
    

// router.get('/1', function (req, res, next) {
//     User.find({ email: "joao23@joao.com" }).then(function (users) {
//         res.send(users);
//     }).catch(next);
// });

// router.post('/all', async (req,res) =>{
//     try{
//         const user = await User.create(req.body);
//         return res.send({ user});
//     } catch (err){
//         return res.status(400).send({error: 'Registration failed'});

//     }
// });
// router.put('/1',function(req,res){
//     User.findOneAndUpdate({name: "Zé"},req.body).then(function(user){
//         User.findOne({name: "Zé"}).then(function(user){
//             res.send(user);
//         });
//     });
// });

// router.delete('/all/:_id',function(req,res){
    
//     User.findOneAndDelete({'_id': req.params._id}).then(function(user) {
//         res.json({menssage: '${[0][name]}'})} )

//     // User.findOneAndDelete({email : "Zezinho434@joao.com"}).then(function(user){
//     //     res.send(user);
//     // });
// });
};
