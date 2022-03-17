const { S3 } = require('aws-sdk')
const express = require('express')

const fs = require('fs')
const utils = require('fs')
const unlinkFile = utils.promisify(fs.unlink)

var multer = require('multer')
var upload = multer({dest: 'uploads/'})
const app = express()

const {uploadFile,getFileStream} = require('./s3')

//Make sure to install the multer library: npm install --save multer
app.get('/images/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
})

/*
app.get("/download/:filename", async(req,res)=> {
    const filename=req.params.filename
    await S3.getObject(
        {Bucket:"csc648-t8-user-uploaded-images",
        Key:filename
    }).promise();
})
*/

app.post('/images', upload.single('image'), async (req, res) => {
    const file = req.file
    console.log(file)
    const result = await uploadFile(file)
    await unlinkFile(file.path)
    console.log(result)
    //const description = req.body.description
    res.send({imagePath: `/images/${result.key}`})
})

app.listen(8080, () => console.log("listening on port 8080"))