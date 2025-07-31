import axios from "axios";
//import { toast } from "react-toastify"; // ✅ only if you're using toast notifications

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // 🔗 Backend base URL
  withCredentials: true, // 🔐 Send cookies (JWT token in cookie)
});

// =======================
// 🔐 AUTH ROUTES
// =======================
export const login = (data) => api.post("/users/login", data);
export const signup = (data) => api.post("/users/signup", data);
export const logout = () => api.get("/users/logout");

// =======================
// 👤 USER ROUTES
// =======================
export const getMyProfile = () => api.get("/users/me");
export const updateMyProfile = (data) => api.patch("/users/updateMe", data);

// =======================
// 📚 COURSE ROUTES
// =======================
export const getCourses = () => api.get("/courses");
export const getCourseById = (id) => api.get(`/courses/${id}`);

// =======================
// 🎓 ENROLLMENT ROUTES
// =======================
export const enrollInCourse = (courseId) =>
  api.post(`/courses/enroll/${courseId}`);
export const getMyEnrollments = () => api.get("/enrollments/my");

export const submitContactForm = (data) => api.post("/contact", data);
export const submitFreeTrialForm = (data) => api.post("/free-trial", data);

// =======================
// 🌐 GLOBAL ERROR HANDLER
// =======================
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      "Something went wrong. Please try again.";
    // ✅ Optional: toast notification
    return Promise.reject(error);
  }
);

export default api;
