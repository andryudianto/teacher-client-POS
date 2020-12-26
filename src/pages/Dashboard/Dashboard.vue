<template>
  <div class="dashboard-page">
    <b-row>
        <b-col xs="12">
          <Widget
            title="<h5>Student <span class='fw-semi-bold'>Lists</span></h5>"
            bodyClass="widget-table-overflow"
            customHeader
          >
            <div class="table-responsive">
              <table class="table table-striped table-lg mb-0 requests-table">
                <thead>
                  <tr class="text-muted">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birth Date</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <StudentTable v-for="student in students" :key="student.id" :student="student" />
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
import StudentTable from '@/components/StudentTable/StudentTable';

import { Chart } from 'highcharts-vue';

export default {
  name: 'Dashboard',
  components: {
    Widget, highcharts: Chart, StudentTable
  },
  computed: {
    students () {
      return this.$store.state.students
    }
  },
  data () {
    return {
      teacherId: ''
    };
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'LoginPage' })
    }
  },
  created () {
    this.$store.dispatch('fetchStudents')
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
