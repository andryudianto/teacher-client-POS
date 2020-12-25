<template>
  <tr>
    <td>{{ quiz.id }}</td>
    <td>{{ quiz.name }}</td>
    <td>{{ quiz.Course.name }}</td>
    <td><a @click.prevent="changePage(quiz.id)" class="click">Quiz</a></td>
  </tr>
</template>

<script>
export default {
  name: 'QuizRow',
  props: [ 'quiz' ],
  methods: {
    toDrive (link) {
      window.location.href = link;
    },
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