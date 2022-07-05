import { ObjectId } from "mongodb";
import MongoDB from "mongodb";

const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function findByLegajo(legajo) {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("examenes");
        const examenes = await collection.find({legajo: parseInt(legajo)}).toArray();
        await client.close();
        return examenes;
    } catch (error) {
        console.log(error);
    }
}

async function update(examen_id, nota) {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("examenes");
        await collection.updateOne({_id: ObjectId(examen_id)}, {$set
            : {nota: parseInt(nota)}});
        await client.close();
        return {
            "mensaje": "Examen actualizado"
        }
    } catch (error) {
        console.log(error);
    }
}

async function create(legajo, materia, nota) {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("examenes");
        await collection.insertOne({
            legajo: parseInt(legajo),
            materia: materia,
            nota: parseInt(nota)
        });
        await client.close();
        return {
            "mensaje": "Examen creado"
        }
    } catch (error) {
        console.log(error);
    }
}

async function remove(examen_id) {
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("examenes");
        await collection.deleteOne({_id: ObjectId(examen_id)});
        await client.close();
        return {
            "mensaje": "Examen eliminado"
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    findByLegajo,
    update,
    create,
    remove
}
