const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoecape:false 
})

server.get("/", function(req, res) {

   const about = {
      avatar_url:"https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/69388018_117731522933394_233031177290645504_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=F2vyBvbju84AX_h3unl&_nc_ht=scontent.frec5-1.fna&oh=4d7d5def3f26427aef063cf46de66b85&oe=5F157223",
      name:"Kleyton Leite",
      role:"keyboard Music",
      description:'Musico Tecladista, apaixonado pelas teclas',
      links: [
         {name: "facebook", url:"https://www.facebook.com/KleytonLeiteMusic"},
         {name: "Instagram", url:"https://www.instagram.com/kleytonleitemusic/?hl=pt-br"}
         
      ]
   }

   return res.render("about", {about})
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio")
 })

 server.get("/divina", function(req, res) {

    return res.render("divina", {itens: videos})
 })

 server.get("/casamentos", function(req, res) {
    return res.render("casamentos", {itens: videos})
 })

 server.get("/bandas", function(req, res) {
    return res.render("bandas", {itens: videos})
 })

 server.get("/gospel", function(req, res) {
    return res.render("gospel", {itens: videos})
 })

server.listen(5000, function() {
    console.log("server is running!!")
})