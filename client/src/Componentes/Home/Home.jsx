import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CoursesContainer from "../CoursesContainer/CoursesContainer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home </h1>
      <CoursesContainer/>
      <Footer />
    </div>
  );
}
