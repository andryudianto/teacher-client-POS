<template>
  <div class="tables-basic">
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="page-title">Course <span class="fw-semi-bold">Lists</span></h2>
      <button type="button" class="btn btn-primary float-right" @click.prevent="changePage">Add Course</button>
    </div>
    <select class="form-control" v-model="LessonId">
      <option disabled>--- Choose Lesson Name ---</option>
      <option v-for="lesson in lessons" :key="lesson.id" v-bind:value="lesson.id">{{ lesson.name }}</option>
    </select>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Courses</span></h5>"
          customHeader settings close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Materi</th>
                  <th class="hidden-sm-down">Link Materi</th>
                </tr>
              </thead>
              <tbody>
                <CourseRow v-for="(course, index) in coursesByLessonId" :key="course.id" :index="index" :course="course" />
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import CourseRow from '@/components/CourseRow/CourseRow';

export default {
  data () {
    return {
      LessonId: ''
    }
  },
  name: 'CoursePage',
  components: { 
    Widget, 
    CourseRow 
  },
  computed: {
    coursesByLessonId () {
      return this.$store.state.coursesByLessonId
    },
    lessons () {
      return this.$store.state.lessons
    }
  },
  methods: {
    changePage () {
      this.$router.push({ name: 'AddCoursePage' })
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
  },
  watch: {
    LessonId: function() {
      const { LessonId } = this
      this.$store.dispatch('fetchCoursesByLessonId', LessonId)
    }
  }
};
</script>

<style src="./Course.scss" lang="scss" scoped />
