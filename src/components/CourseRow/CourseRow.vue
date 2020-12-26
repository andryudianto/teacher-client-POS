<template>
  <tr>
    <td> {{index+1}} </td>
    <td>{{ course.name }}</td>
    <td><a :href=course.materialUrl >Click Here</a></td>
  </tr>
</template>

<script>
export default {
  name: 'CourseRow',
  props: [ 'course', 'index' ],
}
</script>

<style>
.click {
  color: #238AD1;
}
</style>