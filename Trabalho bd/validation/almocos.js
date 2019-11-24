db.createCollection("almocos", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["dia","ementa"],
          properties: {
            dia:{
                bsonType:"date"
            },
            ementa:{
                bsonType:"string"
            }
          }
       }
    }
 })