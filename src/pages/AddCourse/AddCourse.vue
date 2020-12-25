<template>
  <div class="d-flex justify-content-center align-items-center container" style="height: 50vh;">
    <section id="addPage" class="row align-items-center">
      <div class="col-5">
        <form @submit.prevent="addCourse">
          <div class="form-group">
            <label for="name">Course Name</label>
            <input type="text" class="form-control" id="name" autocomplete="off" placeholder="Enter Course Name Here" v-model="name">
          </div>
          <div class="form-group">
            <label for="LessonId">Lesson Name</label>
            <select class="form-control" v-model="LessonId">
              <option disabled>--- Choose Lesson Name ---</option>
              <option v-for="lesson in lessons" :key="lesson.id" v-bind:value="lesson.id">{{ lesson.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="name">Material URL</label>
            <input type="text" class="form-control" id="name" autocomplete="off" placeholder="Enter Material URL Here" v-model="materialUrl">
          </div>
          <button type="submit" class="btn btn-block btn-primary">Add Course</button>
        </form>
      </div>
      <div class="col-4">
        <div class="d-flex align-items-center justify-content-between">
          <h2 class="text-center">Add New Course</h2>
          <router-link to="/app/courses"><button type="button" class="btn btn-primary float-right">Back</button></router-link>
        </div>
        <img src="../../assets/add-course.png" alt="image" class="w-100">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AddCoursePage',
  data () {
    return {
      name: '',
      LessonId: '',
      materialUrl: ''
    }
  },
  computed: {
    lessons () {
      return this.$store.state.lessons
    }
  },
  methods: {
    addCourse () {
      const { name, LessonId, materialUrl } = this

      const payload = {
        name,
        LessonId,
        materialUrl
      }
      this.$store.dispatch('addCourse', payload)
        .then(() => {
          this.$router.push({ name: 'CoursePage' })
        })
        .catch(err => {
          throw err.response
        })
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
