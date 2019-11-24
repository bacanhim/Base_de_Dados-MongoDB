db.createCollection("residencia", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["nome","telemovel","cc","morada","contactos","nif","niss","numero_aluno"],
          properties: {
             nome:{
                 bsonType:"string"
             },
             telemovel:{
                 bsonType:"string"
             },
             telemovel:{
                 bsonType:"int"
             },
             email:{
                 bsonType:"string"
             },
             morada: {
                bsonType: "object",
                required: ["rua", "localidade","codigoPostal" ],
                properties: {
                   rua: {
                      bsonType: "string",
                   },
                   localidade: {
                      bsonType: "string",
                   },
                   codigoPostal:{
                       bsonType:"string"
                   }
                }
             },
             bolseiro:{
                 bsonType:"bool"
             },
             numero_aluno:{
                 bsonType:"int"
             }
          }
       }
    }
 })