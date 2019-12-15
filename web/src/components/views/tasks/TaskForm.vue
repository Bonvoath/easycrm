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
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="onSaveClick"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('save')}}</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <div class="form-group">
                                <label class="label-control kh">Task name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.name"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control kh">Project</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.project_id">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control kh">Deadline</label>
                                <div>
                                    <input type="date" class="form-control form-control-sm" v-model="deadline"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control kh">Assign To</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.employee_id">
                                        <option value="">Not Set</option>
                                        <option v-for="ret in employees" :value="ret._id" :key="ret._id">{{ ret.khmer_name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control kh">Tags</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.tag_id">
                                        <option value="">Not Set</option>
                                        <option v-for="ret in tags" :value="ret._id" :key="ret._id">{{ret.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control kh">Customer</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.customer_id">
                                        <option value="">Not Set</option>
                                        <option v-for="ret in customers" :value="ret._id" :key="ret._id">{{ret.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="form-group">
                                <label class="label-control kh">Planned Hours</label>
                                <div>
                                    <input type="time" class="form-control form-control-sm" v-model="model.planned_hours"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <div class="form-group">
                                <label class="label-control kh">Description</label>
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
                title: this.$t('new'),
                model: {
                    employee_id: '',
                    customer_id: '',
                    tag_id: '',
                    deadline: '',
                    planned_hours: '00:00'
                },
                tags: [],
                employees: [],
                customers: [],
                isUpdate: false,
                deadline: this.$now().format('YYYY-MM-DD')
            }
        },
        created(){
            this.$api().post('task/default').then(res => {
                if(this.$isValid(res)){
                    let data = res.data.Data;
                    this.tags = data.tags;
                    this.employees = data.employees;
                    this.customers = data.customers;
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
                        this.deadline = this.$format(this.model.deadline, 'YYYY-MM-DD');
                        this.title = this.$t('update') + ' / [' + this.model.name + ']';
                    }
                });
            },
            onSaveClick(){
                if(this.isUpdate) this.dbUpdate();
                else this.dbSave();
            },
            dbSave(){
                this.model.deadline = this.deadline;
                this.model.created_by = this.$user()
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
                        name: this.model.name,
                        employee_id: this.model.employee_id,
                        customer_id: this.model.customer_id,
                        tag_id: this.model.tag_id,
                        deadline: this.deadline,
                        planned_hours: this.model.planned_hours,
                        description: this.model.description,
                        updated_by: this.$user()
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