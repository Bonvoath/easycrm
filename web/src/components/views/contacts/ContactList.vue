<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('contact')}}</li>
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
                        <router-link to="/contact/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</router-link>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Phone</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret.Id">
                                <td><input type="checkbox"/></td>
                                <td><router-link :to="{ name: 'contact_update', params: { id: ret._id }}">{{ret.name}}</router-link></td>
                                <td>{{ret.type}}</td>
                                <td>{{ret.phone}}</td>
                                <td>{{ret.mobile}}</td>
                                <td>{{ret.email}}</td>
                                <td>{{ret.website}}</td>
                                <td>{{ret.address}}</td>
                                <td>{{ret.city}}</td>
                                <td>{{ret.state}}</td>
                                <td>{{ret.zip}}</td>
                                <td>{{ret.country}}</td>
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
        this.dbList();
    },
    methods: {
        dbList(){
            let loading = this.$loading.show();
            this.$api().post('customer/list').then(res => {
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