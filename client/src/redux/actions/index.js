import axios from "axios";

export function allUser() {
  return async function (dispatch) {
    try {
      const users = await axios.get(`http://localhost:3001/user`);
      return dispatch({
        type: "ALL_USERS",
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createUser(form) {
  return async function (dispatch) {
    await axios.post(`http://localhost:3001/user/create`, form);
    dispatch({ type: "POST_USER" });
  };
}

export function validateUser(form) {
  return async function (dispatch) {
    await axios.get(`http://localhost:3001/user`, form);
    dispatch({ type: "VALIDATE_USER" });
  };
}

export function allCourses() {
  return async function (dispatch) {
    try {
      const users = await axios.get(`http://localhost:3001/courses/all`);
      return dispatch({
        type: "ALL_COURSES",
        payload: users.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    try {
      const user = await axios.get(`http://localhost:3001/user/id/${id}`);
      console.log(user);
      return dispatch({
        type: "GET_USER_BY_ID",
        payload: user.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUser(id, payload) {
  return async function (dispatch) {
    try {
      await axios.put(`http://localhost:3001/user/update/id/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
  };
}

export const getCoursesById = (id) => {
  return async (dispatch) => {
    const json = await axios.get(`http://localhost:3001/courses/id/${id}`);
    dispatch({ type: "GET_COURSES_BY_ID", payload: json.data });
  };
};

export const removeCourseDetail = () => {
  return { type: "REMOVE_COURSE_DETAIL" };
};

export const courseSearch =(name)=>{
return async (dispatch) =>{
  try {
    const course = await axios.get("http://localhost:3001/courses/search?name="+name)
   dispatch({ type: "GET_SEARCH_COURSE", payload: course.data

  })
  } 
  catch (error) {
    console.log(error) 
    alert("El curso que busca no existe")
  }
}
}

export const filterCourseFree = (payload) => {
  return {
    type: "GET_FILTER_FREE",
    payload: payload,
  };
};

export const filterCourseReview = (payload) => {
  return {
    type: "FILTER_BY_REVIEW",
    payload: payload,
  }
}