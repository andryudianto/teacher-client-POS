<template>
  <b-navbar class="header d-print-none app-header">
    <b-nav>
      <b-nav-item>
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
          <i class='la la-bars la-lg' />
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class="la la-bars la-lg" />
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      <!-- <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text><i class="la la-search"/></b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-form-group>
      </b-form> -->
    </b-nav>
    <a class="navbarBrand d-md-none">
      <i class="fa fa-circle text-danger" />
      &nbsp;
      Platform Online School
      &nbsp;
      <i class="fa fa-circle text-primary" />
    </a>
    <b-nav class="ml-auto">
      <!-- <b-nav-item-dropdown
        class="notificationsMenu d-sm-down-none mr-2"
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right>
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-3">
            <img class="rounded-circle" src="../../assets/people/a5.jpg" alt="..." />
          </span>
          <span class="small"> {{ this.name }} </span>
          <span class="ml-3 mr-3 circle bg-primary text-white fw-bold">13</span>
        </template>
        <Notifications />
      </b-nav-item-dropdown> -->
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <b-nav-item>
          <b-button pill size="sm" variant="primary" 
          v-clipboard="registrationCode"
          >regis code</b-button>
        </b-nav-item>
        <template slot="button-content">
          <i class="la la-cog px-2" />
        </template>
        <!-- <b-dropdown-item><i class="la la-user" /> My Account</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Calendar</b-dropdown-item>
        <b-dropdown-item>
          Inbox &nbsp;&nbsp;<b-badge variant="danger" pill class="animate__animated animate__bounceIn">9</b-badge>
        </b-dropdown-item> -->
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="la la-sign-out" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Notifications from '@/components/Notifications/Notifications';

export default {
  name: 'Header',
  components: { Notifications },
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic']),
    registrationCode: function() {
      return this.$store.state.registrationCode
    }
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    },
    getRegistrationCode() {
      this.$store.dispatch('generateCode')
    }
  },
  created () {
    this.$store.dispatch('generateCode')
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
