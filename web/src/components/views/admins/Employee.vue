<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item active" aria-current="page">Employees</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-list">
                <div class="card-header">
                    <div class="toolbar">
                        <router-link to="/employee/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('new')}}</router-link>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>ID Card</th>
                                <th>Khmer Name</th>
                                <th>Latin Name</th>
                                <th>Date of Birth</th>
                                <th>Sex</th>
                                <th>Phone</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(ret,index) in list" :key="ret.Id">
                                <td>{{index+1}}</td>
                                <td><router-link :to="{name:'employee_update', params: {id: ret._id}}">{{(ret.id_card==undefinded || ret.id_card==null)?'Not Id Card':ret.id_card}}</router-link></td>
                                <td>{{ret.khmer_name}}</td>
                                <td>{{ret.latin_name}}</td>
                                <td>{{$format(ret.dob,'DD-MM-YYYY')}}</td>
                                <td>{{ret.sex}}</td>
                                <td>{{ret.phone}}</td>
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
        data: function(){
            return {
                list: []
            }
        },
        created: function(){
            this.toList();
        },
        methods: {
            toList(){
                let loading = this.$loading.show();
                this.$api().post('employee/list').then(res => {
                    if(this.$isValid(res)){
                        this.list = res.data.Data;
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            }
        }
    }
</script>