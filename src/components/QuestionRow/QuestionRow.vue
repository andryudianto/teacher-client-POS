<template>
  <div>
    <h6><span class="fw-semi-bold">{{ question.question }}</span></h6>
      <hr>
        <li v-for="question in question.choices" :key="question.id">{{ question }}</li>
        <br>
        <b>Answer: {{ question.answer }}</b>
      <hr style="border-top: 1px dashed red">
  </div>
</template>

<script>
export default {
  name: 'QuestionRow',
  props: [ 'question' ]
}
</script>

<style>

</style>