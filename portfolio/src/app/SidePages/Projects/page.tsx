import Image from "next/image";
import styles from "./page.module.css";

export default function Experience() {
  return (
    <div className="right-side">
    <h1>Projects</h1>
    <div className="innerdiv">
    <div>
      <h2>University Projects</h2>
      <div>
        <h4>AR-Based Computer Fundamentals</h4>
        <ul>
          <li>Augmented reality application for interactive learning.</li>
          <li>Unity for 3D modeling and image target recognition.</li>
          <li>Immersive user interface.</li>
        </ul>
      </div>
      <div>
        <h4>Online Movies & Game Website (SE)</h4>
        <ul>
          <li>Web application using HTML, CSS, PHP and MySQL.</li>
          <li>JavaScript for dynamic user interactions.</li>
          <li>Responsive design.</li>
        </ul>
      </div>
      <div >
        <h4>Car Sales System (OOP)</h4>
        <ul>
          <li>Java-based object-oriented car sales management.</li>
          <li>Inventory tracking, sales reporting and customer management.</li>
        </ul>
      </div>

    </div>
    </div>
  </div>

  );
}
