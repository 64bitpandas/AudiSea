/*
MINI BACKEND SERVER
*/

var express = require('express')
var app = express()

var fs = require("fs")

var ytdl = require("youtube-dl")

app.get("/", (req, res) => {
    res.send("Hi this is a lil api used in AudiSea, a project made at Menlo Hacks III")
})

app.get("/api/:id", (req, res) => {
    ytdl.getInfo("www.youtube.com/watch?v=" + req.params.id, [], (err, info) => {
        try {
            res.json({url: info.url, err: false})
        }
        catch (e) {
            res.json({url: null, err: true})
        }
    })
})

app.get("/api", (req, res) => {
    ytdl.getInfo(req.query.url, [], (err, info) => {
        try {
            res.json({url: info.url, err: false})
        }
        catch (e) {
            res.json({url: null, err: true})
        }
    })
})

app.listen(3000, () => console.log('Example app listening on port 443!'))