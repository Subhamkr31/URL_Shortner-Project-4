const urlModel = require('../model/urlModel')


const createUrl = async function (req,res){
    let data = req.body
    const {urlCode,longUrl,shortUrl} = data

    if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, msg: "Please enter request data to be created" })
    }

    if (!urlCode) {
        return res.status(400).send({ status: false, msg: "Please enter urlCode" })
    }

    if (!longUrl) {
        return res.status(400).send({ status: false, msg: "Please enter longUrl" })
    }

        
    if(!longVaildurl){
        return  res.status(400).send({ status: false, msg: "Please enter vaild longUrl" })
    }

}
