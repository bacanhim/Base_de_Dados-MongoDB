db.createCollection("candidaturaCtesp", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "curso","nome","sexo","cc","morada","contactos","nif","niss","numeroAluno"],
         properties: {
            curso: {
               bsonType: "string",
            },
            nome: {
               bsonType: "string",
            },
            sexo: {
               enum: [ "Masculino", "Feminino"],
            },
            cc: {
              bsonType: "object",
              required: [ "numero", "complemento" ],
              properties:{
                  numero:{
                      bsonType:"int"
                  },
                  complemento:{
                      bsonType: "string"
                  }
              }
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
            contactos: {
                bsonType:"object",
                required:["telemovel","email"],
                properties:{
                    telemovel:{
                        bsonType: "int",
                    },
                    email:{
                        bsonType:"string"
                    },
                    telefone:{
                        bsonType:"int"
                    }
                }
            },
            nif:{
               bsonType:"int"
            },
            niss:{
               bsonType:"int"
            },
            numeroAluno:{
               bsonType:"int"
            }
         }
      }
   }
})



db.candidaturaCtesp.createIndex( { "numeroAluno": 1 }, { unique: true } )