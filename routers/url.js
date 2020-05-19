const express = require("express");
const router = express.Router();
const randString = require("randomstring")
const Url = require("../models/Url");

router.post("/link", async (req, res) => {
  
    //Generating URL
    url = req.body.url
    random = randString.generate(6)

    const newUrl = new Url({
      url: req.body.url,
      ident: random,
    });
    try {
      const savedUrl = await newUrl.save();
      res.send({ url: savedUrl.ident })
    } catch (err) {
      res.status(400).send(err);
    }
  });

router.get("/:id", async (req, res) => {
    id = req.params.id
  
    const getUrl = await Url.findOne({ ident: id })
  
    try {
      if (!getUrl) {
        res.status(404).json({ message: "Url not found" })
      } else {
        res.status(200).json({ url: getUrl.url })
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  });


module.exports = router;