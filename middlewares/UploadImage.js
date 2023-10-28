// Incluir as bibliotecas
// Upload de arquivos
const multer  = require('multer');
const contador = 1;
const path = require("path");

const storage = multer({ // o que vai ser exportado

    // diskStorage permite manipular locar para salvar a imagem
    storage: multer.diskStorage({

        // Local para salvar a imagem
        destination: (req, file, cb) => {
            cb(null, './Public/Upload')
        },

        // Nome que deve ser atribuido ao arquivo
        filename: (req, file, cb) => {
            cb(null,Date.now() + path.extname(file.originalname))
        }
    }),
    

    // Validar a extensão do arquivo
    fileFilter:(req, file, cb) =>{
        //O find()método de Arrayinstâncias retorna o primeiro elemento na matriz fornecida que satisfaz a função de teste fornecida
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg',].find /*encontrar*/(formatoAceito => formatoAceito == file.mimetype); 
        extensaoImg? cb(null,true) :  cb(null,false)

        
    }

    

})

module.exports = storage;




