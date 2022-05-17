import axios from "axios";

export function allUser() {
  return async function(dispatch) {
    try {
      const users = await axios.get(`/user`);
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
  return async function(dispatch) {
    try {
      const users = await axios.get(`/category`);
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
  return async function(dispatch) {
    await axios.post(`/user/create`, form);
    dispatch({ type: "POST_USER" });
  };
}

export function createCourse(form) {
  return async function(dispatch) {
    await axios.post(`/courses/create`, form);
    dispatch({ type: "POST_COURSE" });
  };
}

export function createClass(form) {
  return async function(dispatch) {
    await axios.post(`/classes/create`, form);
    dispatch({ type: "POST_CLASS" });
  };
}

export function validateUser(form) {
  return async function(dispatch) {
    const token = await axios.post(`/user/login`, form);
    console.log(token.data);
    dispatch({ type: "VALIDATE_USER", payload: token.data });
  };
}

export function removeToken() {
  return function(dispatch) {
    dispatch({ type: "REMOVE_TOKEN" });
  };
}

export function removeUserDetail() {
  return function(dispatch) {
    dispatch({ type: "REMOVE_USER_DETAIL" });
  };
}

export function allCourses() {
  return async function(dispatch) {
    try {
      const users = await axios.get(`/courses/all`);
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
  return async function(dispatch) {
    try {
      const user = await axios.get(`/user/id/${id}`);
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
  console.log(id, payload);
  return async function() {
    try {
      await axios.put(`/user/update/id/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
  };
}

export function editCoursesById(id, payload) {
  return async function(dispatch) {
    try {
      const update = await axios.put(`/courses/update/id/${id}`, payload);
      dispatch({ type: "EDIT_COURSES_BY_ID", payload: update.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function editClassById(id, payload) {
  return async function(dispatch) {
    try {
      const update = await axios.put(`/classes/update/id/${id}`, payload);
      dispatch({ type: "EDIT_CLASS_BY_ID", payload: update.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getClassById = (id) => {
  return async (dispatch) => {
    const json = await axios.get(`/classes/id/${id}`);
    dispatch({ type: "GET_CLASS_BY_ID", payload: json.data });
  };
};

export const getCoursesById = (id) => {
  return async (dispatch) => {
    const json = await axios.get(`/courses/id/${id}`);
    dispatch({ type: "GET_COURSES_BY_ID", payload: json.data });
  };
};

export const removeCourseDetail = () => {
  return { type: "REMOVE_COURSE_DETAIL" };
};

export const removeClassDetail = () => {
  return { type: "REMOVE_CLASS_DETAIL" };
};

export const removeCourse = (id) => {
  return async (dispatch) => {
    const json = await axios.delete(`/courses/delete/id/${id}`);
    dispatch({ type: "REMOVE_COURSE" });
  };
};

export const removeClass = (id) => {
  return async (dispatch) => {
    const json = await axios.delete(`/classes/delete/id/${id}`);
    dispatch({ type: "REMOVE_CLASS" });
  };
};

export const courseSearch = (name) => {
  return async (dispatch) => {
    try {
      const course = await axios.get("/courses/search?name=" + name);
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
  return async function() {
    try {
      await axios.post(`/buy/`, payload);
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllClasses() {
  return async function(dispatch) {
    try {
      const classes = await axios.get(`/classes/all`);
      return dispatch({
        type: "GET_ALL_CLASSES",
        payload: classes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAvatares() {
  return async function(dispatch) {
    var json = await axios.get("/avatar");
    return dispatch({
      type: "GET_AVATARES",
      payload: json.data,
    });
  };
}

export function createReview(payload) {
  return async function(dispatch) {
    await axios.post(`/review/create`, payload);
    dispatch({ type: "POST_REVIEW" });
  };
}

export function getAllReviews() {
  return async function(dispatch) {
    try {
      const classes = await axios.get(`/review/all`);
      return dispatch({
        type: "GET_ALL_REVIEWS",
        payload: classes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteReview = (id, payload) => {
  console.log(id, payload);
  return async (dispatch) => {
    await axios.delete(`/review/${id}?idCourse=${payload}`);
    dispatch({ type: "DELETE_REVIEW" });
  };
};

export function confirmPayment() {
  return async function(dispatch) {
    try {
      await axios.get(`/mercadopago/pagos`);
      return dispatch({
        type: "GET_ALL_PAYMENTS",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    await axios.delete(`/user/delete/${id}`);
    dispatch({ type: "DELETE_USER" });
  };
};

export function getAllPurchases() {
  return async function(dispatch) {
    try {
      const purchases = await axios.get(`/buy/all`);
      return dispatch({
        type: "GET_ALL_PURCHASES",
        payload: purchases.data,
      });
    } catch (error) {
      console.log(error, "error al traer todas las compras");
    }
  };
}
export function createCategory(name) {
  return async function(dispatch) {
    try {
      await axios.post(`/category/create`, { name: name });
      return dispatch({
        type: "CREATE_CATEGORY",
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function removeCategory(id) {
  return async function(dispatch) {
    try {
      await axios.delete(`/category/${id}`);
      return dispatch({
        type: "REMOVE_CATEGORY",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function reportReview(id) {
  return async function(dispatch) {
    try {
      await axios.put(`/review/update/${id}`);
      dispatch({ type: "REPORT_REVIEW" });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByReported(payload) {
  return { type: "FILTER_BY_REPORTED", payload };
}

export function searchReviewById(payload) {
  return { type: "SEARCH_REVIEW_BY_ID", payload };
}

export function filterReviewByCourse(payload) {
  return { type: "FILTER_REVIEW_BY_COURSE", payload };
}

export function filterByBlocked(payload) {
  return { type: "FILTER_BY_BLOCKED", payload };
}

export function searchUser(id) {
  return async function(dispatch) {
    try {
      const user = await axios.get(`/user/id/${id}`);
      return dispatch({
        type: "SEARCH_USER",
        payload: user.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterPurchasesByCourse(payload) {
  return { type: "FILTER_PURCHASES_BY_COURSE", payload };
}

export function filterSalesByPayed(payload) {
  return { type: "FILTER_SALES_BY_PAYED", payload };
}

export function searchSaleById(payload) {
  return { type: "SEARCH_SALE_BY_ID", payload };
}

export function updateBuy(id, payload) {
  return async function(dispatch) {
    try {
      await axios.put(`/buy/update/${id}`, payload);
      dispatch({ type: "UPDATE_BUY" });
    } catch (error) {
      console.log(error);
    }
  };
}

export function claseSetStatus(payload) {
  return async function(dispatch) {
    try {
      await axios.put(`/buy/setStatus`, payload);
      return dispatch({
        type: "SET_STATUS",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

