<template>
    <div class="card-body" style="padding: 0;">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Date</th>
                    <th>Lead</th>
                    <th class="text-right">Expected Revenue</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Sale Team</th>
                    <th>Sale Person</th>
                    <th class="text-right">Stage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ret in list" :key="ret._id">
                    <td><input type="checkbox"/></td>
                    <td>{{$format(ret.created_at,'DD/MM/YYYY HH:mm A')}}</td>
                    <td><router-link :to="{ name: 'opt_update', params: { id: ret._id }}">{{ret.name}}</router-link></td>
                    <td class="text-right">${{$money(ret.expected_revenue)}}</td>
                    <td>{{ret.email}}</td>
                    <td>{{ret.phone}}</td>
                    <td>{{ret.customer}}</td>
                    <td>{{ret.company}}</td>
                    <td>{{ret.employee_id!=null?ret.employee_id.latin_name:''}}</td>
                    <td>{{ret.saleteam_id!=null?ret.saleteam_id.name:''}}</td>
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