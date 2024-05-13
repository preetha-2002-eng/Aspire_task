// Title - Insert Data using insertOne and insertMany operations
// Author - Preetha I
// Created Date - 07/05/2024

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/aspire';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();  

        const db = client.db('test');
        const collection = db.collection('Employees');

        const cursor = collection.find({});
        await cursor.forEach(record => {
            console.log(record);
        });

        //insertOne
        const ackResult = await collection.insertOne({
            _id: 6,
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            email: 'john.doe@abc.com',
            salary: 60000,
            department: { name: 'Finance' }
        });

        console.log("The record inserted into the collection with ID: " + ackResult.insertedId);
 
 
        //insertMany      
        const manyDocumentsToInsert = [
            {
                _id: 7,
                firstName: 'Priya',
                lastName: 'Dharshini',
                gender: 'female',
                email: 'priya@gmail.com',
                salary: 60000,
                department: { name: 'Tester' }
            },{
                _id: 8,
                firstName: 'Rama',
                lastName: 'Praba',
                gender: 'female',
                email: 'rama@gmail.com',
                salary: 70000,
                department: { name: 'TN' }
            }
        ];

        const manyAckResult = await collection.insertMany(manyDocumentsToInsert);
        console.log("The " + manyAckResult.insertedCount + " records inserted into the collection");

        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();