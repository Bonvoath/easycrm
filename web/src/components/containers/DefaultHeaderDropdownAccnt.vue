<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img :src="'/img/avatars/1.jpg'"
        class="img-avatar"/>
    </template>
    <template slot="dropdown">
      <router-link class="dropdown-item" to="/admin">{{$user()}}</router-link>
      <b-dropdown-item><i class="fa fa-user"/> ប្រវត្តិរូប</b-dropdown-item>
      <b-dropdown-item><i class="fa fa-wrench" /> ការកំណត់</b-dropdown-item>
      <b-dropdown-item href="javascript:void(0)" @click="onlogout"><i class="fa fa-lock" /> ចាកចេញ</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
const AppHeaderDropdown = () => import('../views/layouts/HeaderDropdown.vue');
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    onlogout: () => {
      sessionStorage.clear();
      window.location = '/login'
    }
  }
}
</script>
