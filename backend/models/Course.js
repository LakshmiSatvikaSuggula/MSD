import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  image: String,
  description: String,
  videoFiles: [String], 
  resources: [
    {
      type: { type: String },
      link: String
    }
  ]
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
