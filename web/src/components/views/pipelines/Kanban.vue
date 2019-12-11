<template>
    <div class="card-body" style="padding: 0;">
        <div class="pipeline-container">
            <div v-for="ret in stages" :key="ret._id" class="pipeline-stage">
                <div class="title">{{ret.name}}</div>
                <draggable class="list-group" tag="ul" group="group-pipeline" v-bind="dragOptions"
                    @start="checkMove"
                    @end="checkMove" :move="checkMove">
                    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                        <li class="list-group-item" v-for="item in ret.pipelines" :key="item._id" :data-id="ret._id">
                            <div class="card card-pipeline">
                                <div class="card-header"><router-link :to="{ name: 'opt_update', params: {id:item._id}}" class="x-title">{{item.name}}</router-link>
                                    <div class="pull-right">
                                        <div class="dropdown">
                                            <button class="btn btn-outline-primary btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <div class="dropdown-menu dropdown-menu-right drop-x" aria-labelledby="dropdownMenuButton">
                                                <router-link :to="{ name: 'opt_update', params: {id:item._id}}" class="dropdown-item"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</router-link>
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-share" aria-hidden="true"></i>Move</a>
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-times" aria-hidden="true"></i>Remove</a>
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-history" aria-hidden="true"></i>Schedule Activity</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div>Tag: {{item.tag_id.name}}</div>
                                    <div>Revenue: ${{$money(item.expected_revenue)}}</div>
                                    <div class="footer">
                                        <div class="star">
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <img src="/img/avatars/2.jpg" class="rounded" style="width: 25px; height: 25px;"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </transition-group>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    export default {
        components:{
            draggable
        },
        data(){
            return {
                drag: false,
                stages: []
            }
        },
        mounted(){
            this.toList();
        },
        methods:{
            toList(){
                this.$api().post('pipeline/list_group').then((res) => {
                    if(this.$isValid(res)){
                        this.stages = res.data.Data;
                    }
                }); 
            },
            onClick(){
                alert('Ok');
            },
            checkMove(evt){
                console.log(evt);
                return false;
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 200,
                    group: "group-pipeline",
                    disabled: false,
                    ghostClass: "ghost"
                };
            }
        }
    }
</script>
<style scoped>
    .pipeline-container{
        flex: 1;
        display: flex;
        overflow: auto;
    }
    .pipeline-container .pipeline-stage{
        min-width: 300px;
        border: 1px solid #ddd;
        border-collapse: collapse;
        border-left: 0;
        border-top: none;
    }
    .pipeline-container .pipeline-stage .title{
        font-size: 20px;
        padding: 10px;
        font-weight: 600;
        text-align: center;
    }
    .pipeline-container .pipeline-stage .list-group{
        min-height: 200px;
    }
    .pipeline-container .pipeline-stage .list-group-item{
        border-radius: 0;
        border-left: none;
        border-right: none;
        padding: 5px;
    }
    .pipeline-container .pipeline-stage .list-group-item:focus{
        outline: none;
    }
    .card-pipeline{
        border-radius: 0 !important;
        border: none;
        margin: 0;
    }
    .card-pipeline .card-header{
        border-radius: 0 !important;
        padding: 0px;
        border: none;
    }
    .card-pipeline .card-header a.x-title{
        color: #28a745;
        font-weight: 600;
        font-size: 14px;
    }
    .card-pipeline .card-body{
        padding: 0 3px;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.6);
        line-height: 20px;
    }
    .card-pipeline .footer{
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .card-pipeline .footer .star{
        padding: 3px;
    }
    .card-pipeline .footer .star i{
        margin-right: 3px;
        font-size: 20px;
        color: gold;
    }
    .btn-xs, .btn-xs:focus{
        padding: 0 5px !important;
        box-shadow: none !important;
        outline: none;
        height: 25px;
        width: 25px;
        border: none;
    }
    .flip-list-move {
        transition: transform 0.5s;
    }
    .no-move {
        transition: transform 0s;
    }
    .ghost {
       background: #f2f2f2 !important;
    }
    .list-group-item.ghost .card-pipeline .card-body,
    .list-group-item.ghost .card-pipeline .card-header{
        background: #f2f2f2 !important;
    }
    .drop-x{
        border-radius: 0;
        padding: 0;
    }
    .drop-x .dropdown-item{
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 13px;
    }
    .drop-x .dropdown-item i{
        color: #0856ab;
    }
</style>