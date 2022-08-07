import mongoose from "./db.js";
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - user_name
 *              - user_password
 *  
 *          properties:
 *              user_id:
 *                  type: string
 *              user_name:
 *                  type: string
 *              user_password:
 *                  type: string
 *              create_time:
 *                   type: string
 *              access_token:
 *                   type: string
 * 
 *  responses:
 *      Success:
 *          description: CREATE_SUCCESS.
 * 
 */


const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: Number,
    user_name: String,
    user_password: String,
    user_age: String,
    user_level: String,
    create_time:String,
    token: String,
})

//建立索引  提高查询效率
userSchema.index({user_id: 1})

const userModel = mongoose.model('userModel', userSchema, "userModel");

export default userModel;

