const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

const dbURI = 'mongodb+srv://Firaol:69WyZRDF0wk9iVd6@todotask.w7dkd.mongodb.net/'

//connecting mongodb
mongoose.connect(dbURI, )
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
//creating a schema
const itemSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});
//creatijng a model
const Item = mongoose.model('Item', itemSchema);

// Create an item
app.get('/add-item', async (req, res) => {
  const newItem = new Item({ name: 'Learn MongoDB', completed: false });
  await newItem.save();
  res.send('Item added!');
});

// Fetch all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});



app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
