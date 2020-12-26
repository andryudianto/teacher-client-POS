<template>
  <tr>
    <td>{{ index+1 }}</td>
    <td>{{ quiz.name }}</td>
    <td>{{ quiz.Course.name }}</td>
    <td><a @click.prevent="changePage(quiz.id)" class="click">Detail</a></td>
  </tr>
</template>

<script>
export default {
  name: 'QuizRow',
  props: [ 'quiz', 'index' ],
  methods: {
    changePage (id) {
      this.$router.push({ name: 'QuizDetail', params: { id } })
    }
  }
}
</script>

<style>
.click {
  color: #238AD1;
}
</style>