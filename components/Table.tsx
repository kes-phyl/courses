'use client'
import { useState, useEffect } from "react";
import { fetchData } from "@/utils";
interface Course {
    id: number;
    name: string;
    duration: number;
    lessons: any[];
    status: number;
    createdAt: string;
    removedAt?: string;
  }
  
  interface CourseProps {
    courses: Course[];
  }
  
  const formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };
  
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  const Table= ()  => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
      const fetchCourseData = async () => {
        try {
          const data = await fetchData();
          setCourses(data.courses);
        } catch (error) {
          console.error("Error fetching course data:", error);
        }
      };
  
      fetchCourseData();
    }, []);

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DURATION</th>
            <th>N of LESSONS</th>
            <th>STATUS</th>
            <th>CREATE</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id} style={{ backgroundColor: course.status === 0 ? 'grey' : '' }}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{formatDuration(course.duration)}</td>
              <td>{course.lessons.length === 0 ? 'NONE' : course.lessons.length}</td>
              <td>{course.status === 1 ? 'active' : 'disable'}</td>
              <td style={{ color: course.removedAt ? 'red' : '' }}>{formatDate(course.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;

  