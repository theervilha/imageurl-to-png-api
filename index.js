// app.js
const express = require('express');
const app = express();
const imageRoutes = require('./routes/image');

// Mount the image routes
app.use('/api/images', imageRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});