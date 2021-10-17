const fs = require('fs');

const express = require('express')

const app = express()

const productos = async () => {
    try {
        const producto = await fs.promises.readFile('./productos.txt','UTF-8') 
    } catch (error) {
        console.log(error)
    }
}


app.get ('./productos', (req, res) => {
    res.send (productos)
})



app.get ('./productos/:id', (req, res) => {
    const id = Number(req.params.id)
    const producto = productos.find(producto => producto.id === id)
    res.send (producto)
})



const server = app.listen(8080,() => {
    console.log(`conectado al puerto" ${server.address().port()}`)
})
