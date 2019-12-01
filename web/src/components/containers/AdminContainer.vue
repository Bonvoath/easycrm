<template>
    <div class="app">
            <AppHeader fixed>
                <SidebarToggler class="d-lg-none" display="md" :defaultOpen="false" mobile />
                <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen="false" />
                <b-navbar-nav class="d-md-down-none font-kulen">
                    <b-nav-item class="px-3" to="/">{{$t('pipeline')}}</b-nav-item>
                    <b-nav-item class="px-3" to="/lead">{{$t('lead')}}</b-nav-item>
                    <b-nav-item class="px-3" to="/task">{{$t('task')}}</b-nav-item>
                    <b-nav-item class="px-3" to="/activity">{{$t('activity')}}</b-nav-item>
                    <b-nav-item class="px-3" to="/contact">{{$t('contact')}}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <DefaultHeaderDropdownAccnt/>
                </b-navbar-nav>
                <AsideToggler class="d-none d-lg-block" />
            </AppHeader>
            <div class="app-body">
                <AppSidebar fixed>
                    <SidebarNav :navItems="nav"></SidebarNav>
                </AppSidebar>
                <div class="main">
                    <router-view></router-view>
                </div>
                <AppAside fixed>
                    <DefaultAside/>
                </AppAside>
            </div>
        </div>
</template>
<script>
    import nav from '@/_nav'
    const AppHeader = () => import('../views/layouts/Header.vue');
    const SidebarToggler = () => import('../views/layouts/SidebarToggler.vue');
    const DefaultHeaderDropdownAccnt = () => import('./DefaultHeaderDropdownAccnt.vue');
    const AsideToggler = () => import('../views/layouts/AsideToggler.vue');
    const AppAside = () => import('../views/layouts/Aside.vue');
    const DefaultAside = () => import('./DefaultAside');
    import AppSidebar from '../views/Sidebar/Sidebar';
    import SidebarNav from '../views/Sidebar/SidebarNav';
    export default {
        name: 'AdminContainer',
        components: {
            AppHeader,
            SidebarToggler,
            DefaultHeaderDropdownAccnt,
            AsideToggler,
            AppAside,
            DefaultAside,
            AppSidebar,
            SidebarNav
        },
        data () {
            return {
                nav: nav.items
            }
        },
        computed: {
            name () {
                return this.$route.name
            },
            list () {
                return this.$route.matched.filter((route) => route.name || route.meta.label )
            }
        }
    }
</script>
<style scoped>
    .main{
        background: rgba(0, 0, 0, 0.1);
    }
</style>
