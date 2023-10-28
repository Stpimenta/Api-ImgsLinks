//import
require("dotenv").config(); //variavel de ambiente
const { google } = require('googleapis') 
const fs = require('fs')//arquivos do sistemas Fyles System



//variaveis locais
const GoogleApi = process.env.GOOGLE_API_ID;


//função que vai fazer o upload
const uploadFile = async (name,caminho)=>{
    try{
        //---autenteicar no google drive--///
        const auth = new google.auth.GoogleAuth({
            keyFile:'./workiupload-4a914a263397.json',
            scopes: ['https://www.googleapis.com/auth/drive'],
        });
        const driveService = google.drive({
            version:'v3',
            auth 
        });

        //------informaçoes do arquivo-------//

        const fileMetaData = ({
            'name': [name], //nomeia o arquino google drive
            'parents': [GoogleApi] //pasta de acesso ao repositório esta no ambiente. 
        });

        const media = ({
            mimeType: ['image/jpeg', 'image/png',], //formatos permitidos
            body: fs.createReadStream(caminho) //Caminho
        })

        //solicita para o servidor o envio
        const response = await driveService.files.create({
            resource: fileMetaData, //caminho
            media:media,  //tipo de midia
            fields:'id' //solicita um id
        })

        return response.data.id; //pega o id

    } catch(erro){
        console.log(erro);
    }
}

exports.Enviar = uploadFile;




const deleteFileGoogleDrive  = async(fileId)=> {
    //init the auth with the needed keyfile and scopes
    const auth = new google.auth.GoogleAuth({
        keyFile:'./workiupload-4a914a263397.json',
        scopes: ['https://www.googleapis.com/auth/drive']
    })
    const driveService = google.drive({ version: 'v3', auth })

    try {
        await driveService.files.delete({ fileId });
        // console.log(`O arquivo com ID ${fileId} foi excluído com sucesso!`);
    } catch (error) {
        console.error(`Ocorreu um erro ao excluir o arquivo: ${error}`);
    }
}

exports.Excluir = deleteFileGoogleDrive;




/*
uploadFile("asdasdasdasd123123123123","./Public/Upload/1698448105689.jpeg").then(id =>{
    console.log(id);
    //https://drive.google.com/uc?export=view&id=
}) 
*/

