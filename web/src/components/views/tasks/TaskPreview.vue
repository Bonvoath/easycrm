<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/task">{{$t('task')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <router-link :to="{ name: 'task_update', params: { id: $route.params.id }}" class="btn btn-outline-secondary btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i> {{$t('edit')}}</router-link>
                        <button type="button" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('remove')}}</button>
                        <div class="pull-right">
                            <button type="button" class="btn btn-outline-secondary btn-sm"><i class="fa fa-download" aria-hidden="true"></i> {{$t('Exports')}}</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="legend">Detail</div>
                            <div class="legend-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group row">
                                            <label class="col-sm-4">Type:</label>
                                            <div class="col-sm-8"></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group row">
                                            <label class="col-sm-4">Status :</label>
                                            <div class="col-sm-8">{{model.state_id}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="legend">Description</div>
                            <div class="legend-body html" v-html="model.description"></div>
                            <div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="legend">Peoples</div>
                            <div class="legend-body">
                                <div class="form-group row">
                                    <label class="col-sm-4">- Assignee:</label>
                                    <div class="col-sm-8">Admin</div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4">- Reporter:</label>
                                    <div class="col-sm-8">Admin</div>
                                </div>
                            </div>
                            <div class="legend">Dates</div>
                            <div class="legend-body">
                                <div class="form-group row">
                                    <label class="col-sm-4">- Created:</label>
                                    <div class="col-sm-8">{{ model.created_at }}</div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4">- Updated:</label>
                                    <div class="col-sm-8">{{ model.updated_at }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                title: this.$t('preview'),
                model: {}
            }
        },
        created(){
            let id = this.$route.params.id;
            if(!this.isNullOrEmpty(id)){
                this.findById(id);
            }
        },
        methods: {
            findById(id){
                this.$api().post('task/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                        this.title = '[' + this.model.name + ']';
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .legend{
        border-bottom: 1px solid #ddd;
        padding: 2px 0;
        font-weight: 600;
    }
    .legend-body{
        padding: 10px 0;
    }
</style>