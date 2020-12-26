<template>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ lesson.name }}</div>
      <CourseList v-for="course in lesson.Courses" :key="course.id" :course="course" />
  </div>
</template>

<script>
import CourseList from './CourseList/CourseList';

export default {
  name: 'LessonCard',
  components: { CourseList },
  props: ['lesson'],
}
</script>

<style>
.card {
  width: 20%;
  text-align: center;
  margin: 20px;
}
</style>