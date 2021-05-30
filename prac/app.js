
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

   try{
 const thrillMovie= new Mymovie({     //multiple insertion

  movie:"dabang",
  actor:"salman",
  budget:100
  
 })

 const comedyMovie= new Mymovie({

  movie:"hera pheri",
  actor:"salman",
  budget:200
  
 })




 const result= await Mymovie.insertMany([thrillMovie,comedyMovie]);
 console.log(result); 
}

catch(err){
  console.log(err);
}


}
   CreateDocument();

 //reactMovie.save();

 





