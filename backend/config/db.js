const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useCreateIndex: true,
    });
    console.log(`MongoDB connected ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
      process.exit(1);
  }
};

module.exports = connectDB;


//connect mongodb;
// const CONECTION_URL = "mongodb+srv://root:root@cluster0.sfv9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const PORT = process.env.PORT || 8000;

// mongoose.connect(CONECTION_URL, { userNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

//     mongoose.set('useFindAndModify', false);