import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //call apis
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  //call apis
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, litmit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${litmit}`);
};

const postLogin = (email, password) => {
  return axios.post(`/api/v1/login`, { email, password, delay: 5000 });
};

// const postLogin1 = (userEmail, userPassword) => {
//   return axios.post(`/api/v1/login`, {
//     email: userEmail,
//     password: userPassword,
//   });
// };

const postRegister = (email, password, username) => {
  return axios.post(`/api/v1/register`, { email, password, username });
};

const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};

const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
  return axios.post(`/api/v1/quiz-submit`, { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, quizImage) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.post("api/v1/quiz", data);
};

const getAllQuizForAdmin = () => {
  return axios.get(`/api/v1/quiz/all`);
};

const putUpdateQuiz = (id, name, description, difficulty, image) => {
  //call apis
  const data = new FormData();
  data.append("id", id);
  data.append("name", name);
  data.append("description", description);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.put("api/v1/quiz", data);
};

const deleteQuiz = (quizId) => {
  return axios.delete(`api/v1/quiz/${quizId}`);
};

const postCreateNewQuestionForQuiz = (quiz_id, description, image) => {
  //call apis
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", image);
  return axios.post("api/v1/question", data);
};

const postCreateNewAnswerForQuestion = (
  description,
  correct_answer,
  question_id
) => {
  //call apis
  return axios.post("api/v1/answer", {
    description,
    correct_answer,
    question_id,
  });
};

const postAssignQuiz = (quizId, userId) => {
  return axios.post(`api/v1/quiz-assign-to-user`, { quizId, userId });
};

const getQuizWithQA = (quizId) => {
  return axios.get(`api/v1/quiz-with-qa/${quizId}`);
};

const postUpsertQA = (data) => {
  return axios.post(`api/v1/quiz-upsert-qa`, { ...data });
};

const logout = (email, refresh_token) => {
  return axios.post(`api/v1/logout`, { email, refresh_token });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  putUpdateQuiz,
  deleteQuiz,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
  postAssignQuiz,
  getQuizWithQA,
  postUpsertQA,
  logout,
};
