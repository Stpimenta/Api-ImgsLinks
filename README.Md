Como fazer o projet?

Criar o Arquivo
### npm init -y

Gerencias as requisiçoes, rotas, URLS etc...
### npm install express

Rodar o projeto 
### npm start ou node app.js

Usando node app.js incia o app porem a cada moificaçao é nescessario fechar e abrir denovo
para resolver isso instala o nodemon

primeira vez? instala global
### npm install -g nodemon

caso ja tenha apenas coloque no peojeto
### npm i -D nodemon

-D = salvar como dependencia do projeto

mesma coisa que npm install --save-dev nodemon

cria um script para o nodemon 
va em package .json e adicione  em scripts

### "start": "nodemon ./app.js"


Multer é um middleware 
middleware é um intermédiario sendo utilizado para mover ou transportar informações e dados entre programas de diferentes protocolos de comunicação, plataformas e dependências do sistema operacional.
É geralmente constituído por módulos dotados com APIs de alto nível que proporcionam a sua integração com aplicações desenvolvidas em diversas linguagens de programação e interfaces de baixo nível 
que permitem a sua independência relativamente ao dispositivo. 

### npm install --save multer

Agora é nescessario permitir requisições externas, quais tipos são nescessarios e quais ips tem acesso a fazer requisições ta ae o que precisa instalar
questões de segurança
### npm install cors

Parametros Env
### PORT



///////////////------------------------Agora Como configurar o Google drive Api---------------------/////////////////////////

instalar as depedencias do google 
### npm install googleapis@latest  //lastest baixa a ultima versão

