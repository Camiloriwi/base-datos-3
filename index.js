
// password 0PY0u2OROH0PJJkd

// mongodb+srv://camilomanco2005:0PY0u2OROH0PJJkd@cristian-lunes.nt27iyl.mongodb.net/

const express = require('express');

const mongoose= require('mongoose');


// mongoose.connect('mongodb+srv://camilomanco2005:v6ZWgy5WkuGWDl5P@camilo.lfzjq3i.mongodb.net/');
mongoose.connect('mongodb+srv://camilomanco2005:0PY0u2OROH0PJJkd@cristian-lunes.nt27iyl.mongodb.net/');



const db= mongoose.connection;

db.on('error', console.error.bind(console,'conetion error'));

db.once('open', function () {
    console.log('conected')
    const userSchema = mongoose.Schema({
        nombre: String,
        apellido:String  
    })
    
    // const User = mongoose.model('ejemplos',userSchema);
    const user = mongoose.model('users',userSchema);

    const app = express();
    app.use(express.json());

    //1. listar todos los usuarios de la base datos mayores a 18 años

    app.get('/api/user/may/age', async (req, res)=> {
        try {
            const users = await user.find({edad:{$gt:18}});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: users
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    })



    //2.  Obtener todos los usuarios que sean de Londres o de París.

    app.get('/api/user/citys', async (req, res)=> {

        try {
            const data = await user.find({ ciudad: { $in: ["Londres", "París"] } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    });


    //3.  Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

    app.get('/api/user/age/min/30', async (req, res)=> {

        try {
            const data = await user.find({ salario: { $gt: 2000 }, edad: { $lt: 30 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    })


    //4.  Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
    app.get('/api/user/country/spanich', async (req, res)=> {

        try {
            const data = await user.find({ pais: "España", salario: { $gt: 3000 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    })

    //5.  Obtener todos los usuarios que tengan entre 25 y 35 años.
    app.get('/api/user/age', async (req, res)=> {

        try {
            const data = await user.find({ edad: { $gte: 25, $lte: 35 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    })
    


    //6.  Obtener a todos los usuarios que no sean de Estados Unidos.
    app.get('/api/user/country/unite/states', async (req, res)=> {

        try {
            const data = await user.find({ pais: { $ne: "Estados Unidos" } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    })


    //20.  Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

    app.get('/api/user/salary/mayor', async (req, res)=> {  
        try {
            const data = await user.find({ ciudad: "Londres", $or: [ { salario: { $gt: 2500 } }, { edad: { $gt: 30 } } ] });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/salary/mayor',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/salary/mayor',
                error: error.message
            });
            
        }
    })



    //7.  Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

    app.get('/api/user/country/australia', async (req, res)=> {
        try {
            const data = await user.find({ pais: "Australia", peso: { $gt: 140 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/australia',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/australia',
                error: error.message
            });
            
        }
    })


    //8.  Obtener a todos los usuarios que no sean de Londres ni de París.

    app.get('/api/user/city', async (req, res)=> {
        try {
            const data = await user.find({ ciudad: { $nin: ["Londres", "París"] } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
            
        }
    })


    //9.  Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

    app.get('/api/user/salary', async (req, res)=> {
    try {
            const data = await user.find({ salario: { $lt: 2000 }, $or: [ { edad: { $gt: 40 } }, { salario: { $gt: 2000 } } ] });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/pepe',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/pepe',
                error: error.message
            });
        }
    });




    //10.  Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

    app.get('/api/user/country/canada', async (req, res)=> {
        try {
            const data = await user.find({ pais: "Canadá", $or: [ { salario: { $gt: 4000 } }, { altura: { $gt: 180 } } ] });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/user/country/canada',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/canada',
                error: error.message
            });
        }
    });



    //11.  Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
    app.get('/api/user/country/italia', async (req, res)=> {
        try {
            const data = await user.find({ pais: "Italia", edad: { $gte: 20, $lte: 30 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/italia',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/italia',
                error: error.message
            });
        }
    });




    //12.  Obtener todos los usuarios que no tengan un correo electrónico registrado.
    app.get('/api/user/email', async (req, res)=> {
        try {
            const data = await user.find({ correo: { $exists: false } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/user/email',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/email',
                error: error.message
            });
        }
    });




    //13.  Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
    app.get('/api/user/country/francia', async (req, res)=> {
        try {
            const data = await user.find({ pais: "Francia", salario: { $gte: 3000, $lte: 5000 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada: /api/user/country/francia',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/francia',
                error: error.message
            });
        }
    });




    //14.  Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

    app.get('/api/user/country/brasil', async (req, res)=> {
        try {
            const data = await user.find({ pais: "Brasil", $or: [ { peso: { $lt: 120 } }, { peso: { $gt: 140 } } ] });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/brasil',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/brasil',
                error: error.message
            });
        }
    });



    //15.  Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
    app.get('/api/user/country/argentina/chile', async (req, res)=> {
        try {
            const data = await user.find({ pais: { $in: ["Argentina", "Chile"] }, edad: { $lt: 25 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/argentina/chile',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/argentina/chile',
                error: error.message
            });
        }
    });



    //16.  Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
    app.get('/api/user/country/espana/mexico', async (req, res)=> {
        try {
            const data = await user.find({ pais: { $nin: ["España", "México"] }, salario: { $lt: 3000 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/españa/mexico',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/españa/mexico',
                error: error.message
            });
        }
    });


    //17.  Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

    app.get('/api/user/country/alemania', async (req, res)=> {
        try {
            const data = await user.find({ pais: "Alemania", $or: [ { salario: { $lt: 4000 } }, { edad: { $gt: 35 } } ] });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/alemania',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/alemania',
                error: error.message
            });
        }
    });


    //18.  Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
    app.get('/api/user/country/colombia', async (req, res)=> {
        try {
            const data = await user.find({ pais: { $ne: "Colombia" }, altura: { $lt: 170 } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/colombia',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/colombia',
                error: error.message
            });
        }
    });


    //19.  Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
    app.get('/api/user/country/india', async (req, res)=> {
        try {
            const data = await user.find({ pais: "India", salario: { $exists: false } });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: 'Conexión exitosa al puerto 3000, consulta realizada:/api/user/country/india',
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: 'Hubo un error al realizar la consulta /api/user/country/india',
                error: error.message
            });
        }
    });



  
    app.listen(3000, ()=>{
        console.log('servidor en el puerto 3000');
    })


});





