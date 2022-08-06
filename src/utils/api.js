import axios from "axios";

export default axios.create({
  baseURL: "https://meupetproject.herokuapp.com/",
});
// export default axios.create({
//   baseURL: "http://localhost:5000",
// });
