const mongoose=require('mongoose');
const companySchema=mongoose.Schema({
id:{
        type: String,
        required: true,
    },
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},

tel:{
    type:Number,
    required:true,
},
role:{
    type:String,
    required:true,
},
photo:{
    type:String,
    required:true,
},
date_creation:{
    type:String,
    required:true,
}

});
const Company=mongoose.model('company',companySchema);
module.exports = Company;