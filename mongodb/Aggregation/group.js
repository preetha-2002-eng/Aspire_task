// Title - Group & sum in aggregation
// Author - Preetha I
// Created Date - 09/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/test';
const client = new MongoClient(uri);

async function aggregateGroup() {
    try {
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('Employees');

        const aggregationResult = await collection.aggregate([
            { $group: { _id: "$department.name", count: { $sum: 1 } } }
        ]).toArray();

        console.log(aggregationResult);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

aggregateGroup();