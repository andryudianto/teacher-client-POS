<template>
  <div class="card-body">
    <li class="name">
      {{ course.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'CourseList',
  props: [ 'course' ]
}
</script>

<style>
.card-body {
  text-align: left;
}
</style>