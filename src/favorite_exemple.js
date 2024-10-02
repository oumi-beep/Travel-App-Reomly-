const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
const client = new MongoClient(url);

async function addToFavorites(favorite) {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('travelApp'); // Use your database name
    const favorites = database.collection('favorites');

    // Insert the favorite item
    const result = await favorites.insertOne(favorite);
    console.log(`New favorite added with the following id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error adding to favorites:', error);
  } finally {
    // Ensure the client is closed properly
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Example usage
const newFavorite = {
  id: 4,
  city: "Barcelona",
  price: "500€",
  discount: "25% Off",
  status: "Available",
  amenities: [
    { icon: "MdKingBed", label: "Beds" },
    { icon: "MdBathtub", label: "Bath" },
    { icon: "FaWifi", label: "Wi-fi" },
    { icon: "MdPool", label: "Pool" },
    { icon: "MdLocalParking", label: "Parking" }
  ],
  location: "45 Rambla de Catalunya, Barcelona"
};

// Call the function to add to favorites
addToFavorites(newFavorite);
