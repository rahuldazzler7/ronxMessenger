if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb://localhost:27017/test-messenger' }; // Add your remote db connection string here
} else {
    module.exports = { mongoURI: 'mongodb://localhost:27017/test-messenger' }; // Add your local db connection string here
}