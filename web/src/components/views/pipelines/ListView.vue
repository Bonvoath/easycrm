<template>
    <div class="card-body" style="padding: 0;">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Date</th>
                    <th>Lead</th>
                    <th class="text-right">Expected Revenue</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Sale Team</th>
                    <th>Sale Person</th>
                    <th class="text-right">Stage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ret in list" :key="ret._id">
                    <td><input type="checkbox"/></td>
                    <td>{{$format(ret.created_at,'DD/MM/YYYY HH:mm A')}}</td>
                    <td>{{ret.name}}</td>
                    <td class="text-right">${{$money(ret.expected_revenue)}}</td>
                    <td>{{ret.Email}}</td>
                    <td>{{ret.Phone}}</td>
                    <td>{{ret.Mobile}}</td>
                    <td>{{ret.Country}}</td>
                    <td>{{ret.SalePerson}}</td>
                    <td>{{ret.SaleTeam}}</td>
                    <td class="text-right">{{ret.stage_id.name}}</td>
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
        this.toList();
    },
    methods: {
        toList(){
           this.$api().post('pipeline/list').then((res) => {
               console.log(res.data);
               if(this.$isValid(res)){
                   this.list = res.data.Data;
               }
           }); 
        }
    }
}
</script>
<style>
    .card-form .table thead tr th{
        border-top: none;
    }
</style>