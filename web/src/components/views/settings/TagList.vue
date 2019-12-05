<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb breadcrumb-cus ">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('tag')}}</li>
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
                                <th>Tag Name</th>
                                <th>Description</th>
                                <th>Sort</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret._id">
                                <td style="width: 50px;"><input type="checkbox"/></td>
                                <td><a href="javascript:void(0)" @click="update(ret)">{{ret.name}}</a></td>
                                <td>{{ret.description}}</td>
                                <td>{{ret.sort}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal x-modal fade" tabindex="-1" role="dialog" id="form">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="modal-title">{{title}}</span>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
                                <textarea class="form-control form-control-sm" v-model="model.description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary btn-sm" @click="save">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
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
                this.$api().post('tag/list').then(res => {
                    if(this.$isValid(res)){
                        this.list = res.data.Data;
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
                this.title = 'UPDATE TAG [' + this.model.name + ']';
                $('#form').modal('show');
            },
            save(){
                if(this.isUpdate){
                    let req = {
                        _id: this.model._id,
                        fields: this.model
                    }
                    this.$api().post('tag/update', req).then(res => {
                        if(this.$isValid(res)){
                            this.toList();
                            $('#form').modal('hide');
                        }
                    });
                }else{
                    this.$api().post('tag/save', this.model).then(res => {
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