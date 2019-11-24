db.createCollection("admin", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["user","password"],
          properties: {
            user:{
                bsonType:"string"
            },
            password:{
                bsonType:"string"
            }
          }
       }
    }
 })

db.admin.createIndex( { "user": 1 }, { unique: true } )
//atribuir o campo user como unico