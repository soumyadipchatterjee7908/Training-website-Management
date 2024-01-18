import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";
// import "./Courses.css";

const Courses = () => {
  const [course, setCourse] = useState([]);
  //get course
  const getAllCourse = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/course/all-course"
      );
      if (data?.success) {
        setCourse(data?.course);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return <div>{course && course.map((course) => <CourseCard />)}</div>;
};

export default Courses;
