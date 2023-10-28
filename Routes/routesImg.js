//imports bibliotecas
const express = require("express");
const router = express.Router();

//Imports funcões
const upload = require('../middlewares/UploadImage');
const ImgC = require("../Controllers/imgController");

//Router define a rota/caminho que a requisição terá
router.post("/", upload.single("file"), ImgC.Create);

/*
router.get("/", ImgC.Get);
*/

router.delete("/:id", ImgC.Delete);


//usando module exports para exportar a função
module.exports = router;