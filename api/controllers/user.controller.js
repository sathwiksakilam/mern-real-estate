import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js'
export const test = (req, res) => {
  res.json({
    message: "Hello World!",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id != req.params.id)
    return next(errorHandler(401, "You can only update on your own account!"));
  try{
    if(req.body.password)
    {
        req.body.password = bcryptjs.hashSync(req.body.password,10);
    }
    const updateUser = await User.findByIdAndUpdate(req.params.id,{
        $set:{
            username:req.body.username,
            email:req.body.email,
            avatar:req.body.avatar,
            password:req.body.password,
        }
    },{new:true}) 
    const {password,...others} = updateUser._doc;
    res.status(200).json(others);
  }
  catch(err)
  {
    next(err);
  }
};

// {new: true}: This is an option passed to findByIdAndUpdate to specify that the method should return the updated document rather than the original document before the update. 
// set The $set operator is used to update only the specified fields in the document. If any of the fields (e.g., username, email, avatar, password) are not provided in the request body, they will not be changed.
