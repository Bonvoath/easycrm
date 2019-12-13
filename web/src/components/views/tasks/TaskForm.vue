<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/task">{{$t('task')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{$t('new')}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('save')}}</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <div class="form-group">
                                <label class="label-control">Task name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.name"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control">Project</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.project_id">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control">Deadline</label>
                                <div>
                                    <input type="date" class="form-control form-control-sm" v-model="deadline"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control">Assign To</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.employee_id">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control">Tags</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.tag_id">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control">Customer</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.customer_id">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control">Planned Hours</label>
                                <div>
                                    <input type="number" class="form-control form-control-sm" v-model="model.planned_hours"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <div class="form-group">
                                <label class="label-control">Description</label>
                                <div>
                                    <textarea class="form-control form-control-sm" v-model="model.description"></textarea>
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
                model: {
                    deadline: ''
                },
                isUpdate: false,
                deadline: this.$now().format('YYYY-MM-DD')
            }
        },
        created(){
            this.$api().post('task/listDefault').then(res => {
                if(this.$isValid(res)){
                    console.log(res);
                }
            });
            let id = this.$route.params.id;
            if(!this.isNullOrEmpty(id)){
                this.isUpdate = true;
                this.findById(id);
            }
        },
        methods: {
            findById(id){
                this.$api().post('task/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                    }
                });
            },
            onSaveClick(){
                if(this.isUpdate) this.dbUpdate();
                else this.dbSave();
            },
            dbSave(){
                this.model.deadline = this.deadline;
                this.$api().post('task/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/task');
                    }
                });
            },
            dbUpdate(){
                let req = {
                    _id: this.model._id,
                    fields: {
                        name: this.model.name
                    }
                };
                this.$api().post('task/update', req).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/task');
                    }
                });
            }
        }
    }
</script>