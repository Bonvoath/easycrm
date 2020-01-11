<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/project">{{$t('project')}}</router-link></li>
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
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="" class="label-control kh">Name</label>
                                    <div>
                                        <input type="text" class="form-control form-control-sm" v-model="model.name"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="" class="label-control kh">Sort</label>
                                    <div>
                                        <input type="number" class="form-control form-control-sm" v-model="model.sort"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="label-control kh">Description</label>
                            <div>
                                <VueEditor v-model="model.description"></VueEditor>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { VueEditor } from "vue2-editor";
    export default {
        components:{
            VueEditor
        },
        data(){
            return {
                title: this.$t('new'),
                model: {
                    sort: 0,
                    name: '',
                    description: ''
                },
                isUpdate: false
            }
        },
        created(){
            let id = this.$route.params.id;
            if(!this.isNullOrEmpty(id)){
                this.isUpdate = true;
                this.findById(id);
            }
        },
        methods: {
            findById(id){
                this.$api().post('project/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                        this.title = this.$t('update') + ' / [' + this.model.name + ']';
                    }
                });
            },
            onSaveClick(){
                if(this.isUpdate) this.dbUpdate();
                else this.dbSave();
            },
            dbSave(){
                this.model.created_by = this.$user()
                this.$api().post('project/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/project');
                    }
                });
            },
            dbUpdate(){
                let req = {
                    _id: this.model._id,
                    fields: {
                        name: this.model.name,
                        description: this.model.description,
                        updated_by: this.$user()
                    }
                };
                this.$api().post('project/update', req).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/project');
                    }
                });
            }
        }
    }
</script>