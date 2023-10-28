//importa o repositório
const repositorio = require('../Repositorio/Repositorio');
//importa o fs file sytem
const fs = require('fs');
                                                                                                                 //usando o exports para passar a função para o app.Js
exports.Create = async (req,res) =>{                                                                                //modelo para criar requisições htpp no exports, estou passando a requisição e a resposta
    if(req.file) {                                                                                                           //try e Catch tramtam erros e exeções se por algum motivo n for possivel realizar a requisição
        const file = req.file
        repositorio.Enviar(file.filename,file.path).then(id=>{
        fs.unlinkSync(file.path)
            return res.json({
                status:"Upload realizado com sucesso",
                id: [id],
                url:`https://drive.google.com/uc?export=view&id=${id}`,
            })  
        })  
    }else{
        fs.unlinkSync(file.path)
        return res.status(400).json(
        [error]
        )
     }
}

/*
exports.Get = async (req, res) => {
    try{
        return res.json({ message: "Requisição get" });
    }catch(error){
        return res.status(400).json(
            error
        )
    }
        
  };
*/

exports.Delete = async (req, res) => {
    try{
        repositorio.Excluir(req.params.id);
        return res.json({ 
            message: "Requisição Delete", 
            idExcluido: req.params.id
        });
    }catch(error){
        return res.status(400).json(
            error
        )
    }
};




