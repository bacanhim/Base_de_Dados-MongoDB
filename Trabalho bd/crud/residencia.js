db.residencia.insert({
    nome: "Eeheh XD",
    telemovel: NumberInt(918045395),
    email: "hp@hoidaw.pt",
    morada: {
        rua: "Algures ai",
        localidade: "funchal",
        codigoPostal: "9200-154"
    },
    bolseiro: true,
    numeroAluno: NumberInt(2015718)
})


db.residencia.find({
    numeroAluno: 2015718
}).pretty();


db.residencia.updateOne({
    numeroAluno: 2015718
}, {
    $set: {
        "morada.localidade": "Machico"
    }
});


db.residencia.deleteOne({
    "numeroAluno": 2015718
})