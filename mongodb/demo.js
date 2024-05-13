// Title - Connecting the MongoDb server 
// Author - Preetha I
// Created Date - 07/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db=client.db('test')
        const collection=db.collection('Employees');

        const cursor=collection.find({});

        await cursor.forEach(record=>{
            console.log(record)
        })
        await client.close()
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();