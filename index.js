import express from "express"
const app=express();
import docusingRoutes from './Routes/docusingRoutes';
app.use('/docuSign',docusingRoutes);




app.listen(8000,()=>{

    console.log("server has started")

});
//export default app;
