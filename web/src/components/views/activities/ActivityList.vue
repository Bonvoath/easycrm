<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('activity')}}</li>
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
                        <div class="pull-right">
                            <button type="button" class="btn btn-outline-secondary btn-sm" v-bind:class="{active:viewIndex==0}" @click="viewIndex=0"><i class="fa fa-th" aria-hidden="true"></i></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm" v-bind:class="{active:viewIndex==1}" @click="viewIndex=1"><i class="fa fa-list-ul" aria-hidden="true"></i></button>
                            <button type="button" class="btn btn-outline-secondary btn-sm" v-bind:class="{active:viewIndex==2}" @click="viewIndex=2"><i class="fa fa-calendar" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Completion Date</th>
                                <th>Assigned To</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in list" :key="ret.Id">
                                <td><input type="checkbox"/></td>
                                <td>{{$format(ret.Date,'DD/MM/YYYY HH:mm A')}}</td>
                                <td>{{ret.Name}}</td>
                                <td>{{ret.ContactName}}</td>
                                <td>{{ret.Email}}</td>
                                <td>{{ret.Phone}}</td>
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