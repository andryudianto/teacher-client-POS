<template>
   <div>
    <div class="d-flex align-items-center justify-content-between">
      <h1 class="page-title">
        <!-- <span class="fw-semi-bold">{{ questions[0].Quiz.name }}</span> -->
      </h1>
      <router-link to="/app/quizzes"><button type="button" class="btn btn-primary float-right">Back</button></router-link>
    </div>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Quiz <span class='fw-semi-bold'>Detail</span></h5>"
          customHeader settings close
        > 
          <div>
            <QuestionRow v-for="question in questions" :key="question.id" :question="question" />
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import QuestionRow from '@/components/QuestionRow/QuestionRow'

export default {
  name: 'QuizDetail',
  components: { QuestionRow },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  methods: {
    fetchQuestionByQuizId () {
      const { id } = this.$route.params
      this.$store.dispatch('fetchQuestionByQuizId', id)
    }
  },
  created () {
    this.fetchQuestionByQuizId()
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'LoginPage' })
    }
  }
}
//this.$route.params.id
</script>

<style>

</style>