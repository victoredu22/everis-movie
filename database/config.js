const mongoose = require('mongoose');


const dbConection = async()=>{
  try {

    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    
    console.log('base datos online');

    
  } catch (error) {
    console.log(error);
    throw new Error('Error en la base datos')
  }
}


module.exports = {
  dbConection
}