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
                    
                },
                isUpdate: false
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