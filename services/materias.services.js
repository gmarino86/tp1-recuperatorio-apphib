import MongoDB, { ObjectId } from "mongodb";
import { ObjectID } from "mongodb";

const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function findByMateria(nombreMateria) {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("materias");
        const materias = await collection.find({nombre: nombreMateria}).toArray();
        await client.close();
        return materias;
    } catch (error) {
        console.log(error);
    }
}

async function findByAll() {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("materias");
        const materias = await collection.find({}).toArray();
        await client.close();
        return materias;
    } catch (error) {
        console.log(error);
    }
}

async function create(materia) {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("materias");
        await collection.insertOne(materia);
        await client.close();
        return {
            "mensaje": "Materia creada"
        }
    } catch (error) {
        console.log(error);
    }
}

async function update(materia_id, materia) {
    console.log('%cmaterias.services.js line:48 materia_id, materia', 'color: #007acc;', materia_id, materia);
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("materias");
        await collection.updateOne({_id: new ObjectId(materia_id)}, {$set: {nombre : materia}});
        await client.close();
        return {
            "mensaje": "Materia actualizada"
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    findByMateria,
    findByAll,
    create,
    update
}
