<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('pipeline')}}</li>
                    </ol>
                </nav>
            </div>
            <div class="pull-right" style="padding: 10px 15px;">
                <SearchBox :fields="['Name','Phone','Email', 'Contact']"></SearchBox>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <router-link to="/opt/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</router-link>
                        <div class="pull-right">
                            <button type="button" class="btn btn-outline-secondary btn-sm" v-bind:class="{active:viewIndex==0}" @click="viewIndex=0"><i class="fa fa-th" aria-hidden="true"></i></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm" v-bind:class="{active:viewIndex==1}" @click="viewIndex=1"><i class="fa fa-list-ul" aria-hidden="true"></i></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm" v-bind:class="{active:viewIndex==2}" @click="viewIndex=2"><i class="fa fa-calendar" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <component :is="getComponent"></component>
            </div>
        </div>
    </div>
</template>
<script>
    import KanbanView from '../pipelines/Kanban'
    import ListView from '../pipelines/ListView'
    import CalendarView from '../pipelines/Calendar'
    export default {
        components:{
            KanbanView,
            ListView,
            CalendarView
        },
        data(){
            return{
                viewIndex: 0
            }
        },
        computed: {
            getComponent(){
                let component = 'KanbanView';
                if(this.viewIndex == 1)
                    component = 'ListView';
                else if(this.viewIndex == 2)
                    component = 'CalendarView';
                return component;
            }
        }
    }
</script>