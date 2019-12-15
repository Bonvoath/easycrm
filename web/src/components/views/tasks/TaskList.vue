<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('task')}}</li>
                    </ol>
                </nav>
            </div>
            <div class="pull-right" style="padding: 10px 15px;">
                <SearchBox :fields="['Name','Phone','Email', 'Contact']"></SearchBox>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="content">
            <div class="card card-list">
                <div class="card-header">
                    <div class="toolbar">
                        <router-link to="/task/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</router-link>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Task name</th>
                                <th>Project</th>
                                <th>Assigned To</th>
                                <th>Planned Hours</th>
                                <th>Remaining Hours</th>
                                <th>Deadline</th>
                                <th>Progress</th>
                                <th>Stage</th>
                                <th>Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret._id">
                                <td><input type="checkbox"/></td>
                                <td><router-link :to="{ name: 'task_update', params: { id: ret._id }}">{{ret.name}}</router-link></td>
                                <td>{{ret.project_name}}</td>
                                <td>{{ret.employee_id.khmer_name}}</td>
                                <td>{{ret.planned_hours}}</td>
                                <td></td>
                                <td>{{$format(ret.deadline,'DD-MM-YYYY')}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                query: {

                },
                list: []
            }
        },
        created(){
            this.toList();
        },
        methods: {
            toList(){
                this.$api().post('task/list', this.query).then(res => {
                    if(this.$isValid(res)){
                        this.list = res.data.Data;
                    }
                });
            }
        }
    }
</script>