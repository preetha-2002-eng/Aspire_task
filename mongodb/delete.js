// Title - Delete using deleteOne and deleteMany operations
// Author - Preetha I
// Created Date - 08/05/2024

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

        
        //deleteOne
        const deleteResult = await collection.deleteOne({ firstName: 'Rosy' });
        console.log("Deleted " + deleteResult.deletedCount + " document");
        
        //deleteMany        
        const deleteManyResult = await collection.deleteMany(
            { department: { name: 'Tester' } } 
        );
        console.log("Deleted " + deleteManyResult.deletedCount + " documents");


        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();