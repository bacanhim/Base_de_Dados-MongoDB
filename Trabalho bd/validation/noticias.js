db.createCollection("newsFeed", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: ["titulo","data","text"],
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
 });