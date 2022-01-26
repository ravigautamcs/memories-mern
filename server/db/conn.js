const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB)
.then(()=>{
    console.log(`connection successfull with the database!!`);
})
.catch((e)=>{
    console.log(`sorry the connection is not successfull`);
    console.log(e);
});