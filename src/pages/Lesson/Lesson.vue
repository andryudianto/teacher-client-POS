<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <h1 class="page-title">
        Lesson <span class="fw-semi-bold">Lists</span>
      </h1>
      <button type="button" class="btn btn-primary float-right" @click.prevent="changePage">Add Lesson</button>
    </div>
    <div class="container-home">
      <LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
    </div>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import LessonCard from '@/components/LessonCard/LessonCard';

export default {
  name: 'LessonPage',
  components: { Widget, LessonCard },
  computed: {
    lessons () {
      return this.$store.state.lessons
    }
  },
  methods: {
    changePage () {
      this.$router.push({ name: 'AddLessonPage' })
    }
  },
  created () {
    this.$store.dispatch('fetchLessons')
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

<style>
.container-home {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
}
</style>