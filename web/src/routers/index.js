import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import moment from 'moment';
import CryptoJS from 'crypto-js';
import { i18n } from '../lang/i18n'
const AdminContainer = () => import('../components/containers/AdminContainer');
const PageAdminDashboard = () => import('../components/views/admins/Dashboard');
const EmployeeList = () => import('../components/views/admins/Employee');
const EmployeeForm = () => import('../components/views/admins/EmployeeForm');
const PageLogin = () => import('../components/views/pages/Login');
const LeadList = () => import('../components/views/leads/LeadList');
const LeadForm = () => import('../components/views/leads/LeadForm');
const TaskList = () => import('../components/views/tasks/TaskList');
const TaskForm = () => import('../components/views/tasks/TaskForm');
const ActivityList = () => import('../components/views/activities/ActivityList');
const ContactList = () => import('../components/views/contacts/ContactList');
const ContactForm = () => import('../components/views/contacts/ContactForm');
const PipelineForm = () => import('../components/views/pipelines/Form');
const StageList = () => import('../components/views/settings/StageList');
const TagList = () => import('../components/views/settings/TagList');
const ActivityTypeList = () => import('../components/views/settings/ActivityType');
const ProjectList = () => import('../components/views/projects/ListView');
const ProjectForm = () => import('../components/views/projects/FormView');
function configRoutes() {
    return [
        {
            path: '/',
            component: AdminContainer,
            children: [
                {
                    path: '',
                    name: 'dashbaord',
                    component: PageAdminDashboard,
                    meta: {
                        title: i18n.t('home'),
                        aurequiresAuthth: true,
                    }
                },
                {
                    path: 'lead',
                    component: LeadList,
                    meta: {
                        title: i18n.t('lead'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'lead/create',
                    component: LeadForm,
                    meta: {
                        title: i18n.t('new'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'lead/edit/:id',
                    name: 'lead_update',
                    component: LeadForm,
                    meta: {
                        title: i18n.t('update'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'task',
                    component: TaskList,
                    meta: {
                        title: i18n.t('task'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'task/create',
                    component: TaskForm,
                    meta: {
                        title: i18n.t('new'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'task/edit/:id',
                    name: 'task_update',
                    component: TaskForm,
                    meta: {
                        title: i18n.t('update'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'contact',
                    component: ContactList,
                    meta: {
                        title: i18n.t('contact'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'contact/create',
                    component: ContactForm,
                    meta: {
                        title: i18n.t('new'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'contact/edit/:id',
                    name: 'contact_update',
                    component: ContactForm,
                    meta: {
                        title: i18n.t('update'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'activity',
                    component: ActivityList,
                    meta: {
                        title: i18n.t('activity'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'opt/create',
                    component: PipelineForm,
                    meta: {
                        title: i18n.t('new'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'opt/edit/:id',
                    name: 'opt_update',
                    component: PipelineForm,
                    meta: {
                        title: i18n.t('update'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'employee',
                    component: EmployeeList,
                    meta: {
                        title: i18n.t('employee'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'employee/create',
                    component: EmployeeForm,
                    meta: {
                        title: i18n.t('new'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'employee/edit/:id',
                    name: 'employee_update',
                    component: EmployeeForm,
                    meta: {
                        title: i18n.t('update'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'project',
                    component: ProjectList,
                    meta: {
                        title: i18n.t('project'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'project/create',
                    component: ProjectForm,
                    meta: {
                        title: i18n.t('new'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'project/edit/:id',
                    name: 'project_update',
                    component: ProjectForm,
                    meta: {
                        title: i18n.t('update'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'stage',
                    component: StageList,
                    meta: {
                        title: i18n.t('stage'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'tag',
                    component: TagList,
                    meta: {
                        title: i18n.t('tag'),
                        requiresAuth: true
                    }
                },
                {
                    path: 'activity/type',
                    component: ActivityTypeList,
                    meta: {
                        title: i18n.t('activity_type'),
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: PageLogin,
            meta: {
                title: 'Login',
                requiresAuth: false
            }
        }
    ]
}
const router = new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth == false) {
        next();
    } else {
        if (sessionStorage.getItem('jwt') == null) {
            next('/login');
        } else {
            var expire = CryptoJS.AES.decrypt(sessionStorage.getItem('jwt@exp'),'jwtaccess').toString(CryptoJS.enc.Utf8);
            if(expire == null || (expire != null && moment(expire).valueOf() < moment().valueOf())){
                next('/login');
            }else{
                next();
            }
        }
    }
    document.title = (to.meta.title != undefined?to.meta.title.toUpperCase():'');
    next();
});

export default router;