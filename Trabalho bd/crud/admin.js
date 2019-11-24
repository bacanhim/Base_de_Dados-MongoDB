db.admin.insert({
    user: "phn0m",
    password:"macarrao"
});

//inserir um documento na colecao 

db.admin.find({
    user:"phn0m"
}).pretty();
//visualizar os dados de um utilizador

db.admin.updateOne(
    {"user": "phn0m"},
    {
        $set:{
            "password":"9fc9126898123"
        }
    }
);

//alterar a password de um utilizador

db.admin.deleteOne(
    {"user" : "phn0m" }
);