import express from "express" ;
import cors from 'cors' ;

const app = express() ;

app.use(express.json())  ;
app.use(cors(
    {
        origin : ["http://localhost:5173",
                    "http://localhost:5174",
                    "http://localhost:5175"
        ] ,
        credentials : true
    }
)) ;    

const port = 4000 ;

app.get('/api/message' , (req , res) => {
    res.json({message : "Welcome to the chai code server"}) ;
})

app.listen(port ,"0.0.0.0", () => {
    console.log(`Server is running on port http://localhost:${port}`) ;
})