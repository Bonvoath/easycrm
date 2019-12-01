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
                            <tr v-for="ret in list" :key="ret.Name">
                                <td><input type="checkbox"/></td>
                                <td>{{ret.Name}}</td>
                                <td>{{ret.Description}}</td>
                                <td>{{ret.Sort}}</td>
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
                        <span class="modal-title">{{model.title}}</span>
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
                                        <input type="text" class="form-control form-control-sm" v-model="model.Name"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="" class="label-control kh">Sort</label>
                                    <div>
                                        <input type="number" class="form-control form-control-sm" v-model="model.Sort"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="label-control kh">Description</label>
                            <div>
                                <textarea class="form-control form-control-sm" v-model="model.Description"></textarea>
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
                model: {
                    title: 'ADD NEW TAG',
                    Sort: 0,
                    Name: '',
                    Description: ''
                }
            }
        },
        mounted(){
            $('#form').modal({
                backdrop: false,
                show: false
            });
        },
        methods: {
            addNew(){
                this.model.Sort = this.list.length;
                this.model.Name = '';
                this.model.Description = '';
                $('#form').modal('show');
            },
            save(){
                this.list.push(JSON.parse(JSON.stringify(this.model)));
                $('#form').modal('hide');
            }
        }
    }
</script>