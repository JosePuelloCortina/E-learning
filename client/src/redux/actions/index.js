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

export function allCategories() {
  return async function (dispatch) {
    try {
      const users = await axios.get(`http://localhost:3001/category`);
      return dispatch({
        type: "ALL_CATEGORIES",
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

export function createCourse(form) {
  return async function (dispatch) {
    await axios.post(`http://localhost:3001/courses/create`, form);
    dispatch({ type: "POST_COURSE" });
  };
}

export function validateUser(form) {
  return async function (dispatch) {
    const token = await axios.post(`http://localhost:3001/user/login`, form);
    console.log(token.data);
    dispatch({ type: "VALIDATE_USER", payload: token.data });
  };
}

export function removeToken() {
  return function (dispatch) {
    dispatch({ type: "REMOVE_TOKEN" });
  };
}

export function removeUserDetail() {
  return function (dispatch) {
    dispatch({ type: "REMOVE_USER_DETAIL" });
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

export const courseSearch = (name) => {
  return async (dispatch) => {
    try {
      const course = await axios.get(
        "http://localhost:3001/courses/search?name=" + name
      );
      dispatch({ type: "GET_SEARCH_COURSE", payload: course.data });
    } catch (error) {
      console.log(error);
      alert("El curso que busca no existe");
    }
  };
};

export const filterCourseFree = (payload) => {
  return {
    type: "GET_FILTER_FREE",
    payload: payload,
  };
};

export const filterCategory = (payload) => {
  return {
    type: "FILTER_CATEGORY",
    payload,
  };
};

export const filterCourseReview = (payload) => {
  return {
    type: "FILTER_BY_REVIEW",
    payload: payload,
  };
};

export const addLoggedUser = (payload) => {
  return {
    type: "ADD_LOGGED_USER",
    payload: payload,
  };
};

export const removeLoggedUser = (payload) => {
  return {
    type: "REMOVE_LOGGED_USER",
    payload: payload,
  };
};

export function purchase(payload) {
  return async function () {
    try {
      await axios.post(`http://localhost:3001/buy/`, payload);
    } catch (error) {
      console.log(error);
    }
  };
}


export function getAllClasses() {
  return async function (dispatch) {
    try {
      const classes = await axios.get(`http://localhost:3001/classes/all`);
      return dispatch({
        type: "GET_ALL_CLASSES",
        payload: classes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createReview(payload) {
  return async function (dispatch) {
    await axios.post(`http://localhost:3001/review/create`, payload);
    dispatch({ type: "POST_REVIEW" });
  };
}

export function getAllReviews() {
  return async function (dispatch) {
    try {
      const classes = await axios.get(`http://localhost:3001/review/all`);
      return dispatch({
        type: "GET_ALL_REVIEWS",
        payload: classes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

