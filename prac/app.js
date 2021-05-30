
const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/saurav",{useNewUrlParser:true,useUnifiedTopology: true } )
.then(()=>console.log("Success"))
.catch((err)=>console.log(err));



const mymovieSchema=new mongoose.Schema({

  movie:String,
  actor:String,
  budget:Number



})

// now to insert elements into table i.e create collections with model we insert

const Mymovie= new mongoose.model("Mymovie",mymovieSchema) ; //creation of class

//create document or insert in 1st { }

 const CreateDocument= async () => { 

  
 const reactMovie= new Mymovie({

  movie:"soyaa",
  actor:"Smk",
  budget:5000
  
 })
 const result= await reactMovie.save();
 console.log(result); 

 


}
   CreateDocument();

 //reactMovie.save();

 





