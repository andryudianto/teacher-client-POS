<template>
    <tr>
      <td>{{ student.name }}</td>
      <td>{{ student.email }}</td>
      <td>{{ generateDate(student.birthdate) }}</td>
      <td>{{ student.address }}</td>
    </tr>
</template>

<script>
export default {
  name: 'StudentTable',
  props: ['student'],
  methods: {
    generateDate (date) {
      let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) 
        month = '0' + month;
      if (day.length < 2) 
        day = '0' + day;

      return [day, month, year].join('-');
    }
  }
}
</script>

<style>

</style>