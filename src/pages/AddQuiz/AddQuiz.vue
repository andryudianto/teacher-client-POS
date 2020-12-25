<template>
  <div class="d-flex justify-content-center align-items-center container" style="height: 50vh;">
    <section id="addPage" class="row align-items-center">
      <div class="col-5">
        <form @submit.prevent="addQuiz" v-if="!isAddQuizDone">
          <div class="form-group">
            <label for="name">Quiz Name</label>
            <input type="text" class="form-control" id="name" autocomplete="off" placeholder="Enter Quiz Name Here" v-model="name">
          </div>
          <div class="form-group">
            <label for="LessonId">Lesson Name</label>
            <select class="form-control" v-model="LessonId">
              <option disabled>--- Choose Lesson Name ---</option>
              <option v-for="lesson in lessons" :key="lesson.id" v-bind:value="lesson.id">{{ lesson.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="CourseId">Course Name</label>
            <select class="form-control" v-model="CourseId">
              <option disabled>--- Choose Lesson Name ---</option>
              <option v-for="course in courses" :key="course.id" v-bind:value="course.id">{{ course.name }}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-block btn-primary">Add Quiz</button>
        </form>
        <form @submit.prevent="addQuestion" v-if="isAddQuizDone">
          <div class="form-group">
            <label for="name">Question</label>
            <input type="text" class="form-control" id="question" autocomplete="off" placeholder="Enter Question Here" v-model="question">
          </div>
          <div class="form-group">
            <label for="name">Choices</label>
            <input type="text" class="form-control" id="choices" autocomplete="off" placeholder="Enter Choices Here" v-model="choices">
          </div>
          <div class="form-group">
            <label for="answer">Answer</label>
            <select class="form-control" v-model="answer">
              <option disabled>--- Choose Answer ---</option>
              <option v-for="choice in choices.split(',')" :key="choice" v-bind:value="choice">{{ choice }}</option>
            </select>
          </div>
          <button type="submit" class="btn btn-block btn-primary">Add Question</button>
        </form>
      </div>
      <div class="col-4">
        <div class="d-flex align-items-center justify-content-between">
          <h2 class="text-center">Add New Quiz</h2>
          <router-link to="/app/quizzes"><button type="button" class="btn btn-primary float-right">Back</button></router-link>
          <button type="button" class="btn btn-primary float-right ml-3" v-if="isAddQuizDone" @click="finish">Finish</button>
        </div>
        <img src="../../assets/add-quiz.png" alt="image" class="w-100">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AddQuizPage',
  data () {
    return {
      name: '',
      CourseId: '',
      LessonId: '',
      QuizId: '',
      question: '',
      choices: '',
      answer: '',
      totalQuestion: '',
      isAddQuizDone: false,
    }
  },
  computed: {
    courses () {
      return this.$store.state.courses
    },
    lessons () {
      return this.$store.state.lessons
    },
    quizCourseId () {
      return this.$store.state.quizCourseId
    }
  },
  watch: {
    LessonId: function() {
      const { LessonId } = this
      this.$store.dispatch('fetchCourses', LessonId)
    },
    isAddQuizDone: function() {
      const { CourseId } = this
      this.$store.dispatch('getQuiz', CourseId)
    },
    quizCourseId: function() {
      const found = this.quizCourseId.find(el => el.title === this.name)
      this.QuizId = found.id
    }
  },
  methods: {
    addQuiz () {
      const { name, CourseId } = this
      const payload = { 
        title: name, 
        CourseId 
      }

      this.$store.dispatch('addQuiz', payload)
        .then(() => {
          this.isAddQuizDone = true
        })
        .catch(err => {
          throw err.response
        })
    },
    addQuestion () {
      let choices = this.choices.split(',')
      const { QuizId, answer, question } = this
      const payload = { 
        QuizId, 
        answer, 
        questions: question,
        choices
      }

      this.$store.dispatch('addQuestion', payload)
        .then(() => {
          this.totalQuestion = Number(this.totalQuestion) + 1
          this.question = '',
          this.answer = '',
          this.choices = ''
        })
        .catch(err => {
          throw err.response
        })
    },
    finish () {
      this.isAddQuizDone = false
      this.$router.push({ name: 'QuizPage' })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'LoginPage' })
    }
  },
}
</script>

<style>

</style>
