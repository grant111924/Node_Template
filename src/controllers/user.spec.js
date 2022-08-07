import UserModel from '../models/userModel.js' 
import moment from 'moment';
import { it } from 'mocha';

const values = {
    user_name: "grant",
    user_password: "1234567",
}

describe("Ｕser 相關的單元測試",() => {
    describe("User register 註冊功能", () =>  {
        it("不能重複註冊", (done) => {
            UserModel.find({
                user_name: values.user_name
            }).then((res)=> {
                console.log("find res",res)
                assert.equal(Array.isArray(res), true)
                if(res.length > 0) {
                    as
                }else{

                }
                done()
            }).catch((err) => {
                console.log(err)
                done()
            })
        })

        it("檢查密碼字元", (done) => {
            done()
        })
    })
    
})