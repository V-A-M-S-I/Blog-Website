import express  from "express"
import cors from "cors"
import mongoose, { Mongoose, mongo } from "mongoose"
import bodyParser from "body-parser"

const server =express()
server.use(express.json())
server.use(express.urlencoded())
server.use(cors())

//_____________________________________________-MONGOOSE CONNECTION-________________________________________________________________________//

mongoose.connect("mongodb://127.0.0.1:27017/blog-website",{
    useNewUrlParser:true,
   }).then(()=>{
    console.log("Connected to database");
}).catch(err=>{
    console.log("There is some error in connecting with database",err)
})

//_____________________________________________-MONGOOSE SCHEMA-________________________________________________________________________//

const userSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required: true,
        unique: true,
        trim:true,
        maxLenght:[20,"your name is up to 20 chars long."]
    },
    email:
    {
        type:String,
        required: true,
        trim:true
    },
    password:
    {
        type:String,
        required:true,
        trim:true
    },
 })

const Details = mongoose.model("Details",userSchema)




//_____________________________________________-ROUTES-________________________________________________________________________//

server.post("/signup",async(req, res) => {
    const {name , email , password} = req.body
    try 
    {
        const existingemail = await Details.findOne({ email });
    
        if (existingemail) {
          return alert("user already existed with the mail")
        }
        const user = new Details({
                name:name,
                email:email,
                password:password
            })
           await user.save()
           res.status(200).json({ message: 'User created successfully' });
    }catch (err)
    {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }    
})

server.post("/login",async(req, res) => 
{
    const {email , password} = req.body
    try {
            const existingUser = await Details.findOne({ email });
            if (!existingUser) 
            {
                return res.status(401).json({ message: 'User does not exist. Please sign up first.' });
            }
            
            if (password !== existingUser.password) 
            {
                return res.status(401).json({ message: 'Incorrect password.' });
            }
            res.status(200).json({ message: 'Login successful' });
        } catch (error) 
        {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
});

server.listen(8080,()=>{
    console.log("server has started at port 8080");
})