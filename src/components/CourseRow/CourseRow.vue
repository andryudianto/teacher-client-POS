<template>
  <tr>
    <td>{{ index+1 }}</td>
    <td>{{ course.name }}</td>
    <td>{{ course.Lesson.name }}</td>
    <td><a @click.prevent="toDrive(course.materialUrl)" class="click">Click Here</a></td>
    <td><a @click.prevent="changePage" class="click">Quiz</a></td>
  </tr>
</template>

<script>
export default {
  name: 'CourseRow',
  props: [ 'course', 'index' ],
  methods: {
    toDrive (link) {
      window.location.href = link;
    },
    changePage () {
      this.$router.push({ name: 'QuizPage' })
    }
  }
}
</script>

<style>
.click {
  color: #238AD1;
}
</style>