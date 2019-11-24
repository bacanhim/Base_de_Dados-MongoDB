db.candidaturaCtesp.insert({
    curso: "Tecnologias e Programacao de Sistemas de Informacao",
    nome: "Helder Perestrelo",
    sexo: "Masculino",
    cc: {
        numero: NumberInt(151458),
        complemento: "8 xyz"
    },
    morada: {
        rua: "rua joao gonzales",
        localidade: "funchal",
        codigoPostal: "9992-999"
    },
    contactos: {
        telemovel: NumberInt(919999),
        email: "hp@outlook.pt"
    },
    nif: NumberInt(4234567),
    niss: NumberInt(1236549),
    numeroAluno: NumberInt(1234566)
});



db.candidaturaCtesp.find({
    numeroAluno: 1234566
}).pretty();


db.candidaturaCtesp.updateOne({
    numeroAluno: 1234566
}, {
    $set: {
        "morada.rua": "vereda do bacanhim"
    }
});

db.candidaturaCtesp.deleteOne({
    "numeroAluno": 1234566
})