import express  from "express";
import dotenv from 'dotenv'
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;
import UserRoutes from "./routes/UserRoutes.js";

connectDB();

const app = express();

app.use('/api/users', UserRoutes);

app.get('/', (req,res)=>{
    res.send("server is ready");
})

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=> console.log(`I am listening at port = ${port}`));