const express = require('express')
const app = express()
const port = 3000

// import body parser
const bodyParser = require('body-parser')


//ini untuk cek website
app.get('/', (req,res) =>{
    res.send('Halo Victor')
})

//Insert, Edit Delete
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
// import route posts
const postsRouter = require('./routes/posts')
    // untuk menggunakan route post di express
    // app.use('/api/posts', postsRouter) 
    app.use('/api', postsRouter) 



// ini untuk akses halaman web
app.listen(port, ()=> {
    console.log(`aplikasi berjalan di http://localhost:${port}`)
    // http://localhost:3000/api/posts
})