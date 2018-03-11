/*
MINI BACKEND SERVER
*/

var express = require('express')
var app = express()
var fs = require("fs")
var ytdl = require("youtube-dl")
var request = require("request")
var shortid = require("shortid")

app.use(express.static("videos"))

app.get("/", (req, res) => {
    res.send("Hi this is a lil api used in AudiSea, a project made at Menlo Hacks III")
})

app.get("/api/:id", (req, res) => {
    ytdl.getInfo("https://www.youtube.com/watch?v=" + req.params.id, [], (error, info) => {

            request(info.url, (err, res2, body) => {
                var id = shortid.generate()
                fs.writeFile("./videos/" + id + ".mp4", body, (err) => {
                    res.json({url: req.baseUrl + "/videos/" + id + ".mp4", err: false})
                })
            })

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