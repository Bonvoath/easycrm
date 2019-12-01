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
                                <th>Email</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret.Id">
                                <td><input type="checkbox"/></td>
                                <td>{{$format(ret.Date,'DD/MM/YYYY')}}</td>
                                <td>{{ret.Name}}</td>
                                <td>{{ret.ContactName}}</td>
                                <td>{{ret.Email}}</td>
                                <td>{{ret.Phone}}</td>
                                <td>{{ret.Mobile}}</td>
                                <td>{{ret.Country}}</td>
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
    mounted(){
        this.list.push({
            Id: 1,
            Date: new Date(),
            Name: 'Design Software Info',
            ContactName: 'Jose Garcia',
            Email: 'jga@solar.example.com',
            Phone: '093879882',
            Mobile: '086879882',
            Country: 'Cambodia',
            Company: 'Solar IT',
            SalePerson: 'March Demo',
            SaleTeam: 'Cambodia'
        });
        this.list.push({
            Id: 2,
            Date: new Date(),
            Name: 'Design Software Info',
            ContactName: 'Jose Garcia',
            Email: 'jga@solar.example.com',
            Phone: '093879882',
            Mobile: '086879882',
            Country: 'Cambodia',
            Company: 'Solar IT',
            SalePerson: 'March Demo',
            SaleTeam: 'Cambodia'
        });
        this.list.push({
            Id: 3,
            Date: new Date(),
            Name: 'Design Software Info',
            ContactName: 'Jose Garcia',
            Email: 'jga@solar.example.com',
            Phone: '093879882',
            Mobile: '086879882',
            Country: 'Cambodia',
            Company: 'Solar IT',
            SalePerson: 'March Demo',
            SaleTeam: 'Cambodia'
        });
    }
}
</script>