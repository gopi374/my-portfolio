const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    const db = client.db();
    
    switch (event.httpMethod) {
      case 'GET':
        // Handle GET requests
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'API is working' })
        };
        
      case 'POST':
        // Handle POST requests
        const data = JSON.parse(event.body);
        // Add your POST logic here
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Data received' })
        };
        
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  } finally {
    await client.close();
  }
}; 