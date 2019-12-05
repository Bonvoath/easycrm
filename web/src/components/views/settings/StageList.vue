<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('stage')}}</li>
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
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="addNew"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Stage Name</th>
                                <th>Description</th>
                                <th>Sort</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret._id">
                                <td><input type="checkbox"/></td>
                                <td><a href="javascript:void(0)" @click="update(ret)">{{ret.name}}</a></td>
                                <td>{{ret.description}}</td>
                                <td>{{ret.sort}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <StageFormModal id="form" @save="save" :title="title" :vmodel="model"></StageFormModal>
    </div>
</template>
<script>
    import $ from 'jquery'
    import StageFormModal from './StageFormModal'
    export default {
        components: {
            StageFormModal
        },
        data(){
            return {
                list: [],
                title: 'ADD NEW TAG',
                model: {
                    sort: 0,
                    name: '',
                    description: ''
                },
                isUpdate: false
            }
        },
        mounted(){
            this.toList();
            $('#form').modal({
                backdrop: false,
                show: false
            });
        },
        methods: {
            toList(){
                let loading = this.$loading.show();
                this.$api().post('stage/list').then(res => {
                    if(this.$isValid(res)){
                        this.list = res.data;
                    }
                }).finally(function(){ loading.hide(); });
            },
            addNew(){
                this.model={
                    name: '',
                    description: '',
                    sort: this.list.length
                };
                $('#form').modal('show');
            },
            update(item){
                this.model = JSON.parse(JSON.stringify(item));
                this.isUpdate = true;
                this.title = 'UPDATE STAGE [' + this.model.name + ']';
                $('#form').modal('show');
            },
            save(e){
                console.log(e);
                if(this.isUpdate){
                    let req = {
                        _id: e._id,
                        fields: e
                    }
                    this.$api().post('stage/update', req).then(res => {
                        if(this.$isValid(res)){
                            this.toList();
                            $('#form').modal('hide');
                        }
                    });
                }else{
                    this.$api().post('stage/save', e).then(res => {
                        if(this.$isValid(res)){
                            this.toList();
                            $('#form').modal('hide');
                        }
                    });
                }
            }
        }
    }
</script>