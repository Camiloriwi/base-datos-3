/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/




db.users.insertMany([
    {
        nombres: "Carlos",
        apellidos: "Rodríguez",
        correo: "carlos@example.com",
        ciudad: "Cali",
        país: "Colombia",
        salario: 55000,
        edad: 32,
        altura: 180,
        peso: 170
    },
    {
        nombres: "Laura",
        apellidos: "Hernández",
        correo: "laura@example.com",
        ciudad: "Barranquilla",
        país: "Colombia",
        salario: 62000,
        edad: 26,
        altura: 165,
        peso: 140
    },
    {
        nombres: "Andrés",
        apellidos: "López",
        correo: "andres@example.com",
        ciudad: "Cartagena",
        país: "Colombia",
        salario: 58000,
        edad: 29,
        altura: 175,
        peso: 160
    },
    {
        nombres: "Juan",
        apellidos: "Pérez",
        correo: "juan@example.com",
        ciudad: "Medellín",
        país: "Colombia",
        salario: 50000,
        edad: 30,
        altura: 175,
        peso: 160
    },
    {
        nombres: "María",
        apellidos: "González",
        correo: "maria@example.com",
        ciudad: "Bogotá",
        país: "Colombia",
        salario: 60000,
        edad: 28,
        altura: 160,
        peso: 130
    },
    {
        nombres: "Luis",
        apellidos: "Martínez",
        correo: "luis@example.com",
        ciudad: "Pereira",
        país: "Colombia",
        salario: 59000,
        edad: 27,
        altura: 172,
        peso: 150
    },
    {
        nombres: "Ana",
        apellidos: "Ramírez",
        correo: "ana@example.com",
        ciudad: "Bucaramanga",
        país: "Colombia",
        salario: 54000,
        edad: 31,
        altura: 168,
        peso: 135
    },
    {
        nombres: "Diego",
        apellidos: "Gómez",
        correo: "diego@example.com",
        ciudad: "Manizales",
        país: "Colombia",
        salario: 57000,
        edad: 29,
        altura: 178,
        peso: 155
    },
    {
        nombres: "Sofía",
        apellidos: "Vargas",
        correo: "sofia@example.com",
        ciudad: "Cúcuta",
        país: "Colombia",
        salario: 61000,
        edad: 25,
        altura: 163,
        peso: 125
    },
    {
        nombres: "Pedro",
        apellidos: "Fernández",
        correo: "pedro@example.com",
        ciudad: "Ibagué",
        país: "Colombia",
        salario: 52000,
        edad: 33,
        altura: 170,
        peso: 145
    }
   
]);

db.users.insertMany([
    {
        nombres: "Juan",
        apellidos: "Pérez",
        correo: "juan@example.com",
        ciudad: "Madrid",
        país: "España",
        salario: 70000,
        edad: 30,
        altura: 170,
        peso: 140
    },
    {
        nombres: "Ana",
        apellidos: "Rodríguez",
        correo: "ana@example.com",
        ciudad: "Lima",
        país: "Perú",
        salario: 65000,
        edad: 32,
        altura: 165,
        peso: 135
    },
    {
        nombres: "Carlos",
        apellidos: "García",
        correo: "carlos@example.com",
        ciudad: "Buenos Aires",
        país: "Argentina",
        salario: 72000,
        edad: 34,
        altura: 175,
        peso: 145
    },
    {
        nombres: "Lucía",
        apellidos: "Martínez",
        correo: "lucia@example.com",
        ciudad: "Santiago",
        país: "Chile",
        salario: 68000,
        edad: 29,
        altura: 160,
        peso: 130
    },
    {
        nombres: "Pedro",
        apellidos: "Hernández",
        correo: "pedro@example.com",
        ciudad: "Ciudad de México",
        país: "México",
        salario: 69000,
        edad: 31,
        altura: 165,
        peso: 135
    },
  
    
])


db.users.find();