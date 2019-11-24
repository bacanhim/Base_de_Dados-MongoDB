db.createCollection("newsFeed", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["nome","telemovel","cc","morada","contactos","nif","niss","numero_aluno"],
          properties: {
            titulo:{
                bsonType:"string"
            },
            data:{
                bsonType:"date"
            },
            text:{
                bsonType:"string"
            }
          }
       }
    }
 })