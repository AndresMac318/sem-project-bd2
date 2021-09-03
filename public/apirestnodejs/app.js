var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var app = express();
const bcryptjs = require('bcryptjs');
const session = require('express-session');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(express.json());
app.use(cors());
//Establecemos los parametros de conexión
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'licoreradb'
});
//Conexión a la database
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexión establecida correctamente con la base de datos!");
    }
});
/* app.get('/', function(req,res){
    res.send('Ruta INICIO');
}); */

app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));

//Mostrar todos los artículos
app.get('/apirestnodejs/articulos', (req,res)=>{
    conexion.query('SELECT * FROM articulos', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
});

//mostrar solo un articulo
app.get('/apirestnodejs/articulos/:id', (req, res)=>{
    conexion.query('SELECT * FROM articulos WHERE idArticulo = ?', [req.params.id], (error, fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    });
});

//crear un articulo
app.post('/apirestnodejs/articulos', (req, res)=>{
    let data = {nombreA:req.body.nombre, descripcionA:req.body.descripcion, precioA:req.body.precio, stock:req.body.stock};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql, data, function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

//editar articulo
app.put('/apirestnodejs/articulos/:id', (req, res)=>{
    let idArticulo = req.params.id;//id x medio de la url
    let nombreA = req.body.nombreA;
    let descripcionA = req.body.descripcionA;
    let precioA = req.body.precioA;
    let stock = req.body.stock;
    let sql = "UPDATE articulos SET nombreA = ?, descripcionA = ?, precioA = ?, stock = ? WHERE idArticulo = ?";
    conexion.query(sql, [nombreA, descripcionA, precioA, stock, idArticulo], function(error, results){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

//eliminar articulo
app.delete('/apirestnodejs/articulos/:id', (req, res)=>{
    conexion.query('DELETE FROM articulos WHERE idArticulo = ?', [req.params.id], function(error, filas){
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

//crear un usuario "registrar"
app.post('/apirestnodejs/usuario/', async(req, res)=>{
    let nombreU = req.body.nombreU;
    let correoU = req.body.correoU;
    let passwordU = req.body.passwordU;
    let passwordUHaash = await bcryptjs.hash(passwordU, 8);//encriptacion
    let sql = "INSERT INTO usuario set ?";
    conexion.query(sql, {nombreU:nombreU, correoU:correoU, passwordU:passwordUHaash}, function(error, results){
    if(error){
        throw error;
    }else{
        res.send(results);
    }
});
});


//autenticacion de usuario
app.post('/apirestnodejs/login/', async(req,res)=>{
    let correoU = req.body.correoU;
    let passwordU = req.body.passwordU;
    let passwordUHaash = await bcryptjs.hash(passwordU, 8);
    if(correoU && passwordU){
        conexion.query('SELECT * FROM usuario WHERE correoU = ?',[correoU], async(error, results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(passwordU, results[0].passwordU))){
                res.send("CREDENCIALES DE ACCESO INCORRECTAS!");
                
            }else{
                req.session.loggedin = true;
                req.session.name = results[0].nombreU;
                res.send(results[0].nombreU);
                console.log('se creo la variable de inicio de session!');
                passwordUHaash;
            }
        })
    }else{
        res.send('Ingrese su usuario y contraseña!');
    }
    
});

//proteccion de views
app.get('/articulos',(req, res)=>{
    if(req.session.loggedin){
        res.router.push('listar', {
            login: true,
            name: req.session.nombreU
        });
    }else{
        res.router.push('/login', {
            login: false,

        })
    }
})

//logout
app.get('/apirestnodejs/logout',(req, res)=>{
    req.session.destroy(()=>{
        res.send('Sesion cerrada!')
    })
})

const puerto = process.env.PUERTO || 3000;
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto);
});