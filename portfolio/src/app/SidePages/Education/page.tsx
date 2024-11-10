import Image from "next/image";
import styles from "./page.module.css";

export default function Experience() {
  return (
    <div  className="right-side">
    <h1>Education</h1>
      <h2>Bachelor's Degree</h2>
        <h4>Sir Syed University of Engineering & Technology</h4>
        <p> Bachelor of Science in Computer Engineering (2020-2024)</p>
        <p>CGPA: 3.58</p>
      <h2>Intermediate</h2>
        <h4>Monotechnic Institute</h4>
        <p>Diploma of Associate Engineer (Computer Information Technology) (2016 - 2019)</p>
        <p>Percentage: 69%</p>
      <h2>Matriculation</h2>
        <h4>Nasra School</h4>
        <p>Science (2004-2016)</p>
        <p>Percentage: 65%</p>
  </div>
  );
}
