// Title - Sorting the Employee data 
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
            { $sort: { salary: 1 } } 
        ]).toArray();

        console.log(aggregationResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

aggregateExample();