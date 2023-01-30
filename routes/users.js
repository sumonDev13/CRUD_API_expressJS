import express from "express";
const router = express.Router();

import { createUser ,getUsers,getUser,deleteUser,updateUser} from "../controllers/user.js";


 
 
router.get('/',getUsers);

//posting_data.......to database,......

 router.post('/' ,createUser);

 //searching....

 router.get('/:id',getUser)

 //delete.....

router.delete('/:id',deleteUser)

//Update....

router.patch('/:id',updateUser)

 export default router;