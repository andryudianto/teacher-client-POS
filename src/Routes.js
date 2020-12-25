import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import LoginPage from '@/pages/Login/Login';
import RegisterPage from '@/pages/Register/Register';
import ErrorPage from '@/pages/Error/Error';
// Lesson
import LessonPage from '@/pages/Lesson/Lesson';
import AddLessonPage from '@/pages/AddLesson/AddLesson';

// Course
import CoursePage from '@/pages/Course/Course';
import AddCoursePage from '@/pages/AddCourse/AddCourse';

// Main
import Dashboard from '@/pages/Dashboard/Dashboard';

// Quiz
import QuizPage from '@/pages/Quiz/Quiz';
import AddQuizPage from '@/pages/AddQuiz/AddQuiz';
import QuizDetail from '@/pages/QuizDetail/QuizDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'lessons',
          name: 'LessonPage',
          component: LessonPage
        },
        {
          path: 'quizzes',
          name: 'QuizPage',
          component: QuizPage,
        },
        {
          path: 'courses',
          name: 'CoursePage',
          component: CoursePage,
        },
        {
          path: 'add-lesson',
          name: 'AddLessonPage',
          component: AddLessonPage,
        },
        {
          path: 'add-course',
          name: 'AddCoursePage',
          component: AddCoursePage,
        },
        {
          path: 'add-quiz',
          name: 'AddQuizPage',
          component: AddQuizPage,
        },
        {
          path: 'quiz-detail',
          name: 'QuizDetail',
          component: QuizDetail,
        }
      ],
    }
  ],
});
