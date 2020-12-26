import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
  },
  state: {
    teacher: [],
    students: [],
    lessons: [],
    courses: [],
    quizzes: [],
    selectedLessons: [],
    QuizId: '',
    questions: [],
    registrationCode: '',
    coursesByLessonId: []
  },
  mutations: {
    setTeacher (state, payload) {
      state.teacher = payload
    },
    setLessons (state, payload) {
      state.lessons = payload
    },
    setStudents (state, payload) {
      state.students = payload
    },
    setCourses (state, payload) {
      state.courses = payload
    },
    setQuizzes (state, payload) {
      state.quizzes = payload
    },
    setQuizCourseId (state, payload) {
      state.quizCourseId = payload
    },
    setSelectedQuiz (state, payload) {
      state.questions = payload
    },
    setRegistrationCode (state, payload) {
      state.registrationCode = payload
    },
    setCoursesByLessonId (state, payload) {
      state.coursesByLessonId = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/teacher/login',
        data: {
          email,
          password
        }
      })
    },
    register (context, payload) {
      const { name, address, birthdate, email, password } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/teacher/register',
        data: {
          name,
          address,
          birthdate,
          email,
          password
        }
      })
    },
    fetchLessons (context) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/lessons`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setLessons', data)
        })
        .catch(err => {
          throw err.response
        })
    },
    addLesson (context, name) {
      return axios({
        method: 'POST',
        url: `http://localhost:3000/lessons`,
        data: {
          name
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchStudents (context) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/students`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setStudents', data)
        })
        .catch(err => {
          throw err.response
        })
    },
    fetchCoursesByLessonId (context, payload) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/courses/`+payload
      })
        .then(({ data }) => {
          context.commit('setCoursesByLessonId', data)
        })
        .catch(err => {
          throw err.response
        })
    },
    addCourse (context, payload) {
      const { name, LessonId, materialUrl } = payload

      return axios({
        method: 'POST',
        url: `http://localhost:3000/courses`,
        data: {
          name,
          materialUrl,
          LessonId
        }
      })
    },
    fetchQuizzes (context) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/quizzes`
      })
        .then(({ data }) => {
          context.commit('setQuizzes', data)
        })
        .catch(err => {
          throw err.response
        })
    },
    addQuiz (context, payload) {
      const {name, CourseId } = payload

      return axios({
        method: 'POST',
        url: `http://localhost:3000/quizzes/${CourseId}`,
        data: {
          name
        }
      })
    },
    getQuiz (context, payload) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/quiz/${payload}`
      })
      .then(({ data }) => {
        context.commit('setQuizCourseId', data)
      })
      .catch(err => {
        throw err
      })
    },
    addQuestion (context, payload) {
      const { QuizId, answer, question, choices } = payload

      return axios({
        method: 'POST',
        url: `http://localhost:3000/questions/${QuizId}`,
        data: {
          question,
          answer,
          multipleChoice: choices
        }
      })
    },
    fetchQuestionByQuizId (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/questions/${id}`
      })
        .then(({ data }) => {
          context.commit('setSelectedQuiz', data)
        })
        .catch(err => {
          throw err.response
        })
    },
    generateCode (context) {
      axios({
        method: 'get',
        url: `http://localhost:3000/registrationcode`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({ data }) =>{
        context.commit('setRegistrationCode', data)
      })
      .catch(err => {
        throw err.response
      })
    }
  }
});
