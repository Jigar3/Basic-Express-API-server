const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/student";

mongoose.connect(url).then(() => {
  console.log("Connected Successfully");
});

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  enrollmentNumber: {
    type: String
  }
});

module.exports = mongoose.model("Student", studentSchema);
