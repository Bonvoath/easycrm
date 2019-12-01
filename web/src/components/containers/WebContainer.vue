<template>
    <div>
        <div class="main-header">
            <div class="container">
                <div class="header-upper">
                    <div class="float-left logo-outer">
                        <img src="../../assets/img/kpt.png" style="height: 100px;" />
                    </div>
                    <div class="float-right upper-right">
                        <ul class="nav nav-cus font-kulen">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">ទំព័រដើម</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/price/capital">តម្លៃសេវាថ្នាក់រាជធានី-ខេត្ត</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/price/district">តម្លៃសេវាថ្នាក់ក្រុង-ស្រុក-ខណ្ឌ</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/price/commune">តម្លៃសេវាថ្នាក់ឃុំ-សង្កាត់</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/search">ពិនិត្យដំណើរការឯកសារ</router-link>
                            </li>
                            <li class="nav-item" v-if="$user()==undefined">
                                <router-link class="nav-link" to="/login" style="padding-right: 0;">ចូល</router-link>
                            </li>
                            <DefaultHeaderDropdownAccnt class="x-dropdown font-bat" v-else/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top: 130px;">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
const DefaultHeaderDropdownAccnt = () => import('./DefaultHeaderDropdownAccnt.vue');
export default {
  components:{
      DefaultHeaderDropdownAccnt
  }  
}
</script>
<style>
    .x-dropdown .nav-link{
        padding: 0 !important;
    }
    .x-dropdown .nav-link img{
        width: 35px !important;
    }
    .x-dropdown ul{
        border-radius: 0;
        padding: 0;
    }
    .x-dropdown ul li a{
        font-size: 14px !important;
    }
</style>