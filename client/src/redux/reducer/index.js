const initialState = {
  user: [],
  filteredUsers: [],
  userDetail: {},
  courses: [],
  coursesBackUp: [],
  courseDetail: [],
  categories: [],
  coursesfiltered: [],
  loggedUsers: [],
  token: {},
  classes: [],
  classDetail: [],
  avatares: [],
  reviews: [],
  purchases: [],
  allReviews: [],
  purchasesCopy: [],
};

function sortAsc(arr, field) {
  return arr.sort(function(a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function(a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_USERS":
      return {
        ...state,
        user: action.payload,
        filteredUsers: action.payload,
      };

    case "POST_USER":
      return {
        ...state,
      };

    case "POST_COURSE":
      return {
        ...state,
      };

    case "POST_CLASS":
      return {
        ...state,
      };

    case "VALIDATE_USER":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: {},
      };
    case "ALL_COURSES":
      return {
        ...state,
        courses: action.payload,
        coursesBackUp: action.payload,
        coursesfiltered: action.payload,
      };
    case "ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload.data,
      };
    case "GET_USER_BY_ID":
      return {
        ...state,
        userDetail: action.payload,
      };
    case "GET_COURSES_BY_ID":
      return {
        ...state,
        courseDetail: action.payload,
      };

    case "GET_CLASS_BY_ID":
      return {
        ...state,
        classDetail: action.payload,
      };

    case "REMOVE_CLASS":
      return {
        ...state,
      };

    case "REMOVE_COURSE_DETAIL":
      return {
        ...state,
        courseDetail: [],
      };

    case "REMOVE_CLASS_DETAIL":
      return {
        ...state,
        classDetail: [],
      };

    case "GET_SEARCH_COURSE":
      return {
        ...state,
        courses: action.payload,
      };
    case "GET_FILTER_FREE":
      const Coursesfiltered = action.payload;
      if (Coursesfiltered === "free") {
        return {
          ...state,
          courses: state.coursesBackUp.filter((course) => course.price === 0),
          coursesfiltered: state.coursesBackUp.filter(
            (course) => course.price === 0
          ),
        };
      } else if (Coursesfiltered === "paid") {
        return {
          ...state,
          courses: state.coursesBackUp.filter((course) => course.price > 0),
          coursesfiltered: state.coursesBackUp.filter(
            (course) => course.price > 0
          ),
        };
      }
      return {
        ...state,
        courses: state.coursesBackUp,
      };
    case "FILTER_CATEGORY":
      if (action.payload.length !== 0) {
        const selectedCategories = action.payload;
        const filterCategories = state.coursesBackUp.filter((course) => {
          return selectedCategories.every((i) =>
            course.categories.map((category) => category.name).includes(i)
          );
        });
        return {
          ...state,
          courses: filterCategories,
          coursesfiltered: filterCategories,
        };
      } else {
        return {
          ...state,
          courses: state.coursesBackUp,
          coursesfiltered: state.coursesBackUp,
        };
      }

    case "FILTER_BY_REVIEW":
      let sortedReviewArr =
        action.payload === "asc"
          ? sortAsc(state.courses, "review")
          : sortDesc(state.courses, "review");
      return {
        ...state,
        courses: sortedReviewArr,
      };
    case "ADD_LOGGED_USER":
      return {
        ...state,
        loggedUsers: [action.payload],
      };
    case "REMOVE_LOGGED_USER":
      return {
        ...state,
        loggedUsers: [],
      };
    case "REMOVE_USER_DETAIL":
      return {
        ...state,
        userDetail: [],
      };
    case "GET_ALL_CLASSES":
      return {
        ...state,
        classes: action.payload,
      };

    case "GET_AVATARES":
      return {
        ...state,
        avatares: action.payload,
      };

    case "POST_REVIEW":
      return {
        ...state,
      };
    case "GET_ALL_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
        allReviews: action.payload,
      };

    case "EDIT_COURSES_BY_ID":
      return {
        ...state,
        courseDetail: action.payload,
      };

    case "EDIT_CLASS_BY_ID":
      return {
        ...state,
        classDetail: action.payload,
      };

    case "DELETE_REVIEW":
      return {
        ...state,
      };
    case "DELETE_USER":
      return {
        ...state,
      };

    case "GET_ALL_PAYMENTS":
      return {
        ...state,
      };

    case "GET_ALL_PURCHASES":
      return {
        ...state,
        purchases: action.payload,
        purchasesCopy: action.payload,
      };
    case "REPORT_REVIEW":
      return {
        ...state,
      };
    case "CREATE_CATEGORY":
      return {
        ...state,
      };

    case "REMOVE_CATEGORY":
      return {
        ...state,
      };
    case "FILTER_BY_REPORTED":
      const allReviews1 = state.allReviews;
      const reportedFilter =
        action.payload === "reported"
          ? allReviews1.filter((e) => e.reported === true)
          : allReviews1;
      return {
        ...state,
        reviews: reportedFilter,
      };
    case "SEARCH_REVIEW_BY_ID":
      const allReviews2 = state.allReviews;
      const reviewById = action.payload.length
        ? allReviews2.filter((e) => e.userId === action.payload)
        : allReviews2;
      return {
        ...state,
        reviews: reviewById,
      };
    case "FILTER_REVIEW_BY_COURSE":
      const allReviews3 = state.allReviews;
      const reviewByCourse =
        action.payload === "all"
          ? allReviews3
          : allReviews3.filter((e) => e.course.name === action.payload);
      return {
        ...state,
        reviews: reviewByCourse,
      };

    case "FILTER_PURCHASES_BY_COURSE":
      const allPurchases = state.purchasesCopy;
      const purchasesByCourse =
        action.payload === "all"
          ? allPurchases
          : allPurchases.filter((e) => e.courseName === action.payload);
      return {
        ...state,
        purchases: purchasesByCourse,
      };
    case "FILTER_BY_BLOCKED":
      let filteredBlocked =
        action.payload === "all"
          ? state.user
          : state.user.filter((u) => u.banned === action.payload);
      return {
        ...state,
        filteredUsers: filteredBlocked,
      };
    case "SEARCH_USER":
      return {
        ...state,
        filteredUsers: [action.payload],
      };

    case "FILTER_SALES_BY_PAYED":
      const allSales = state.purchasesCopy;
      const salesByPayed =
        action.payload === "payed"
          ? allSales.filter((e) => e.payed === true)
          : action.payload === "notPayed"
          ? allSales.filter((e) => e.payed === false)
          : action.payload === "all"
          ? allSales
          : null;
      return {
        ...state,
        purchases: salesByPayed,
      };
    case "SEARCH_SALE_BY_ID":
      const allSales1 = state.purchasesCopy;
      const salesById = allSales1.filter(
        (e) => e.course.users[0].id === action.payload
      );
      return {
        ...state,
        purchases: salesById,
      };


    case "UPDATE_BUY":
      return {
        ...state,
      };


    case "SET_STATUS":
      return {
        ...state,
      };


    default:
      return state;
  }
}
