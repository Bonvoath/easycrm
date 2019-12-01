<template>
    <div class="card-body" style="padding: 0;">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Date</th>
                    <th>Lead</th>
                    <th>Contact Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Sale Team</th>
                    <th>Sale Person</th>
                    <th>Company</th>
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
                    <td>{{ret.SalePerson}}</td>
                    <td>{{ret.SaleTeam}}</td>
                    <td>{{ret.Company}}</td>
                </tr>
            </tbody>
        </table>
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
<style>
    .card-form .table thead tr th{
        border-top: none;
    }
</style>