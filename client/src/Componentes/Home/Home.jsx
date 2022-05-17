import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import NavBarCopy from "../NavBar copy/NavBarcopy";
import Footer from "../Footer/Footer";
import { allCategories, allCourses } from "../../redux/actions";
import CoursesContainer from "../CoursesContainer/CoursesContainer";
import Pagination from "../Pagination/Pagination";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import CarouselSuggestions from "../CarouselSuggestions/CarouselSuggestions";
import Contenido from "../Chatbot/Chatbot";

export default function Home() {
  const dispatch = useDispatch();

  // async function getCourses() {
  //   await dispatch(allCourses());
  // }

  // async function getCategories() {
  //   await dispatch(allCategories());
  // }

  const[chatbot, setChatbot]=useState(false)
 
  
  useEffect(() => {
    dispatch(allCourses());
    dispatch(allCategories());
  }, [dispatch]);

  const [orderReview, setOrderReview] = useState("");

  const courses = useSelector((state) => state.courses);
  const loggedUser = useSelector((state) => state.loggedUsers);
  console.log(loggedUser, "loggedUser");
  const [currentPage, setCurrentPage] = useState(1);

  const [coursesPerPage] = useState(6);
  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourses = courses.slice(firstCourseIndex, lastCourseIndex);

  return (
    <div className={styles.home}>
      
      <NavBar setChatbot={setChatbot} chatbot ={chatbot}/>
      <NavBarCopy
        setOrderReview={setOrderReview}
        setCurrentPage={setCurrentPage}
      />
      
      
      <br/>
      <Carousel/>
      {
        chatbot?
        <div className={styles.visible}><Contenido setChatbot={setChatbot} chatbot ={chatbot} /></div>:null
      }
      <CoursesContainer currentCourses={currentCourses} />
      <Pagination
        currentPage={currentPage}
        coursesPerPage={coursesPerPage}
        lastCourseIndex={lastCourseIndex}
        allCourses={courses}
        setCurrentPage={setCurrentPage}
      />
      <br/>
      <br/>
      
       {loggedUser.length > 0 ? <CarouselSuggestions loggedUser={loggedUser} /> : <CarouselSuggestions loggedUser={loggedUser}/>}
     
      <div className={styles.footer}>
        <Footer />
      </div>

    </div>
  );
}
