<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb breadcrumb-cus ">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('activity_type')}}</li>
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
                                <th style="width: 50px;"><input type="checkbox"/></th>
                                <th>Activity Type</th>
                                <th>Description</th>
                                <th>Sort</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret._id">
                                <td><input type="checkbox"/></td>
                                <td>{{ret.name}}</td>
                                <td>{{ret.description}}</td>
                                <td>{{ret.sort}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ModalSlot id="form" title="NEW ACTIVITY TYPE" @save="save">
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
        </ModalSlot>
    </div>
</template>
<script>
    import $ from 'jquery'
    import ModalSlot from '../Utils/Modal'
    export default {
        components: {
            ModalSlot
        },
        data(){
            return{
                list: [],
                model: {
                    name: '',
                    description: '',
                    sort: 0
                }
            }
        },
        mounted(){
            this.toList();
            $('#form').modal({
                backdrop:false,
                show: false,
            });
        },
        methods: {
            toList(){
                let loading = this.$loading.show();
                this.$api().post('activity/type/list').then(res => {
                    this.list = res.data;
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
            save(){
                this.$api().post('activity/type/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.toList();
                        $('#form').modal('hide');
                    }
                });
            }
        }
    }
</script>