//express é o framewoek que oferece soluçoes para gerenciar requisiçoes HTTP
const express = require("express");
const app = express();

//gerencia requisiçoes externas
const cors = require('cors')

//importando o middleware de upload
const multer = require('./middlewares/UploadImage');

const ImgRouter = require("./Routes/routesImg")
//usando o arquivo .env, variaveis de ambiente/segurança
require("dotenv").config();



//express "escuta a porta" porta na qual o "websocket" será visto. 
const port = process.env.PORT||3000; // || fallback 3000, literalmente cair para trás se por algum motivo n der para usar o env a porta 3000 é acionada. 

app.use("/upload-image", ImgRouter, (next,) => {

    // Qualquer endereço pode fazer requisição "*"
    res.header("Access-Control-Allow-Origin", "*");

    // Tipos de método que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");

    // Executar o cors
    app.use(cors());

    // Quando não houver erro deve continuar o processamento
    next();
});


//--------------forma antiga de fazer para entender a estrutura linha a linha-----------//
//criando rotas
//parametros são (nome da rota para acessar com requisicão)
/*app.post("/upload-image", multer.single('img'), async(req,res) =>{
     
    //requisição
    if(req.file){
        console.log(req.ip);
        //resposta
        return res.json({
            erro:false,
            message:"Upload realizado com sucesso",
            name: req.file.filename
        })
    };

    //resposta de erro
    return res.status(400).json({
        erro:true,
        message:"Erro"
    })
});
*/

//por fim fazermos o app escutar uma porta, definimos porta de funcionamento 8080 ou 4000
app.listen(port,() =>{
    console.log(`o sev roda na porta ${port} --- link: http://localhost:${port}`);   
});