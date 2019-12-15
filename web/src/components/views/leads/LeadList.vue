<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('lead')}}</li>
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
                        <router-link to="/lead/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</router-link>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Date</th>
                                <th>Lead</th>
                                <th>Contact Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Mobile</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Country</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret._id">
                                <td><input type="checkbox"/></td>
                                <td>{{$format(ret.created_at,'DD/MM/YYYY HH:mm A')}}</td>
                                <td><router-link :to="{ name:'lead_update', params: { id: ret._id }}">{{ret.name}}</router-link></td>
                                <td>{{ret.customer}}</td>
                                <td>{{ret.email}}</td>
                                <td>{{ret.phone}}</td>
                                <td>{{ret.mobile}}</td>
                                <td>{{ret.city}}</td>
                                <td>{{ret.state}}</td>
                                <td>{{ret.zip}}</td>
                                <td>{{ret.country}}</td>
                                <td>{{ret.company}}</td>
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
    data(){
        return{
            list: []
        }
    },
    created(){
        this.toList();  
    },
    methods: {
        toList(){
            this.$api().post('lead/list').then(res => {
                if(this.$isValid(res)){
                    this.list = res.data.Data;
                }
            });
        }
    }
}
</script>