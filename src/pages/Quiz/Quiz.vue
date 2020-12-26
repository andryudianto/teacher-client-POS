<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <h1 class="page-title">
        Quiz <span class="fw-semi-bold">Lists</span>
      </h1>
      <button type="button" class="btn btn-primary float-right" @click.prevent="changePage">Add Quiz</button>
    </div>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Quiz</span></h5>"
          customHeader settings close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">No</th>
                  <th>Nama</th>
                  <th>Materi</th>
                  <th>Lihat Quiz</th>
                </tr>
              </thead>
              <tbody>
                <QuizRow v-for="(quiz, index) in quizzes" :key="quiz.id" :index="index" :quiz="quiz" />
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import QuizRow from '@/components/QuizRow/QuizRow';

export default {
  name: 'QuizPage',
  components: { QuizRow },
  computed: {
    quizzes () {
      return this.$store.state.quizzes
    }
  },
  methods: {
    changePage () {
      this.$router.push({ name: 'AddQuizPage' })
    }
  },
  created () {
    this.$store.dispatch('fetchQuizzes')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'LoginPage' })
    }
  }
};
</script>

<style src="./Quiz.scss" lang="scss" scoped />
