db.almocos.insert({
    dia: ISODate("2019-11-23"),
    ementa:"macarrao"
});
//inserir a ementa de um dia em especifico

db.almocos.find({
    dia:ISODate("2019-11-23")
}).pretty();
//encontrar a ementa daquele dia

db.almocos.updateOne(
    {dia:ISODate("2019-11-23")},
    {
        $set:{
            "ementa":"Macarrao de ontem"
        }
    });
// alterar a ementa de um determinado dia

db.almocos.deleteMany(
    {"dia" : {$lte: ISODate("2019-11-23") } }
);
//apaga as ementas que sejam inferiroes a data indicada