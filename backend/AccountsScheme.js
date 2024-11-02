import mongoose from 'mongoose'

const account = new mongoose.Schema({
    login: {type:String,required:true},
   password: {type:String,required:true},
   userRole:{type:String,required:true}
},{versionKey:false})

export default mongoose.model('accounts',account)