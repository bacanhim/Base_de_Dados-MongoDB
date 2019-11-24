db.createCollection("residencia", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nome", "telemovel", "email", "morada", "bolseiro", "numeroAluno"],
            properties: {
                nome: {
                    bsonType: "string"
                },
                telemovel: {
                    bsonType: "int"
                },
                email: {
                    bsonType: "string"
                },
                morada: {
                    bsonType: "object",
                    required: ["rua", "localidade", "codigoPostal"],
                    properties: {
                        rua: {
                            bsonType: "string",
                        },
                        localidade: {
                            bsonType: "string",
                        },
                        codigoPostal: {
                            bsonType: "string"
                        }
                    }
                },
                bolseiro: {
                    bsonType: "bool"
                },
                numeroAluno: {
                    bsonType: "int"
                }
            }
        }
    }
});


db.residencia.createIndex({
    "numeroAluno": 1
}, {
    unique: true
});