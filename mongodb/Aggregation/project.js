// Title - Projecting specific Employee data 
// Author - Preetha I
// Created Date - 09/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/test';
const client = new MongoClient(uri);

async function aggregateExample() {
    try {
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('Employees');

        const aggregationResult = await collection.aggregate([
            { 
                $project: { 
                    fullName: { $concat: ["$firstName", " ", "$lastName"] },
                    email: 1,
                    department: 1,
                    salary: 1
                } 
            } 
        ]).toArray();

        console.log(aggregationResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

aggregateExample();