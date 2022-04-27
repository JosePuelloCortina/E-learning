import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CoursesContainer from "../CoursesContainer/CoursesContainer";
import Pagination from "../Pagination/Pagination";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home </h1>
      <CoursesContainer />
      <Pagination />
      <Footer />
    </div>
  );
}
