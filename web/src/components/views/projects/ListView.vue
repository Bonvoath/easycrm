<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb breadcrumb-cus ">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('project')}}</li>
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
                        <router-link to="project/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</router-link>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>Sort</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret._id">
                                <td style="width: 50px;"><input type="checkbox"/></td>
                                <td><router-link :to="{ name: 'project_update', params: { id: ret._id }}">{{ret.name}}</router-link></td>
                                <td>{{ret.description}}</td>
                                <td>{{ret.sort}}</td>
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
                list: []
            }
        },
        mounted(){
            this.toList();
        },
        methods: {
            toList(){
                let loading = this.$loading.show();
                this.$api().post('project/list').then(res => {
                    if(this.$isValid(res)){
                        this.list = res.data.Data;
                    }
                }).finally(function(){ loading.hide(); });
            }
        }
    }
</script>