const express = require('express');
const app = express();

const modeloMember = require('./models').Member

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/crearmiembro', (req, res) =>{
    modeloMember.create(req.body)
        .then( (data) =>{
            res.json({datos:data})
        })
        .catch( (error) =>{
            res.json({error:error})
        })
})

app.get('/mostrarmiembros', (req, res) =>{
    modeloMember.findAll()
    .then( (data) =>{
        res.json({datos:data})
    })
    .catch( (error) =>{
        res.json({error:error})
    })
})

app.listen(3000, () =>{
    console.log('Server up, running in http://localhost:3000');
});

app.delete('/borrarmiembro/:id', (req, res) =>{
    modeloMember.destroy({
        where: {id: req.params.id}
    })
    .then( (data) =>{
        res.json({datos:data})
    })
    .catch( (error) =>{
        res.json({error:error})
    })
})

app.put('/editarmiembro/:id', (req, res) =>{
    modeloMember.update(req.body, {
        where: {id: req.params.id}
    })
    .then( (data) =>{
        res.json({datos:data})
    })
    .catch( (error) =>{
        res.json({error:error})
    })
})