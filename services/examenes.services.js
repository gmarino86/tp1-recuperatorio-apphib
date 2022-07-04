import MongoDB from "mongodb";
const client = new MongoDB.MongoClient("mongodb://127.0.0.1:27017");

async function findByLegajo(legajo) {
    console.log('%cexamenes.services.js line:5 legajo', 'color: #007acc;', legajo);
    try {
        await client.connect();
        const db = client.db("apphibtp1");
        const collection = db.collection("examenes");
        const examenes = await collection.find({legajo: parseInt(legajo)}).toArray();
        console.log('%cexamenes.services.js line:10 examenes', 'color: #007acc;', examenes);
        await client.close();
        return examenes;
    } catch (error) {
        console.log(error);
    }
}


export {
    findByLegajo
}
