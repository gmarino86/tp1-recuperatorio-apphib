import MongoDB from "mongodb";
const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function findAll() {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("alumnos");
        const alumnos = await collection.find({}).toArray();
        await client.close();
        return alumnos;
    } catch (error) {
        console.log(error);
    }
}

async function findByLegajo(legajo) {
    await client.connect();
    const db = client.db("apphibtp1");
    const collection = db.collection("alumnos");
    const alumnos = await collection.findOne({legajo: parseInt(legajo)})
    await client.close();
    return alumnos;
}

async function create(alumno) {
    await client.connect();
    const db = client.db("apphibtp1");
    const collection = db.collection("alumnos");
    const alumnoInserted = await collection.insertOne({...alumno, legajo: parseInt(alumno.legajo)});
    await client.close();
    return alumnoInserted;
}

export {
    findAll,
    findByLegajo,
    create
}
