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
                        <router-link to="/employee/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> បន្ថែមថ្មី</router-link>
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
                                <th>Sex</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(ret,index) in list" :key="ret.Id">
                                <td>{{index+1}}</td>
                                <td><router-link :to="{name:'edit_employee', params: {id: ret.Id}}">{{ret.IdCard}}</router-link></td>
                                <td>{{ret.KhmerName}}</td>
                                <td>{{ret.LatinName}}</td>
                                <td>{{ret.SexName}}</td>
                                <td>{{ret.Phone}}</td>
                                <td>{{ret.Pob}}</td>
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
                this.$api().post('api/employee/list').then(res => {
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