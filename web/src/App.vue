<template>
  <transition>
    <router-view></router-view>
  </transition>
</template>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Moul&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Koulen&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Battambang&display=swap');
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';

  //@import '~flag-icon-css/css/flag-icon.min.css';
  
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  @import "assets/coreui/scss/coreui";
  @import './assets/styles.scss';
</style>