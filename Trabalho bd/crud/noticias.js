db.newsFeed.insert({
    titulo: "Macarrao Azedo",
    data: new Date(),
    text: "Macarrao azedo foi distribuido na cantina"
});


db.newsFeed.find({
    titulo: "Macarrao Azedo"
}).pretty();


db.candidaturaCtesp.updateOne({
    titulo: "Macarrao Azedo"
}, {
    $set: {
        text: "Macarrao azedo foi distribuido na cantina"
    }
});

db.newsFeed.deleteOne({
    titulo: "Macarrao Azedo"
});