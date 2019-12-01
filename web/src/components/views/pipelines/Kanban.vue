<template>
    <div class="card-body" style="padding: 0;">
        <div class="pipeline-container">
            <div v-for="ret in stages" :key="ret.Id" class="pipeline-stage">
                <div class="title">{{ret.Name}}</div>
                <draggable class="list-group" tag="ul" group="group-pipeline" v-bind="dragOptions"
                    @start="drag = true"
                    @end="drag = false">
                    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                        <li class="list-group-item" v-for="item in ret.Pipelines" :key="item.Id" data-id="ret.Id">
                            <div class="card card-pipeline">
                                <div class="card-header"><span @click="onClick(ret)" style="cursor:pointer;">{{item.Name}}</span>
                                    <div class="pull-right">
                                        <div class="dropdown">
                                            <button class="btn btn-outline-primary btn-xs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                            <div class="dropdown-menu dropdown-menu-right drop-x" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</a>
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-share" aria-hidden="true"></i>Move</a>
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-times" aria-hidden="true"></i>Remove</a>
                                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-history" aria-hidden="true"></i>Schedule Activity</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div>Tag: {{ret.Tag}}</div>
                                    <div>Revenue: $3,346.00</div>
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
                stages: [
                    {
                        Name: 'New',
                        Tag: 'Design',
                        Pipelines: [
                            { Id: 1, Name: 'Cras justo odio' },
                            { Id: 2, Name: 'Dapibus ac facilisis in' },
                            { Id: 3, Name: 'Morbi leo risus' },
                            { Id: 4, Name: 'Porta ac consectetur ac' },
                            { Id: 5, Name: 'Vestibulum at eros' },
                        ]
                    },
                    {
                        Name: 'Qualified',
                        Tag: 'Information',
                        Pipelines: [
                            { Id: 6, Name: 'Office Design and Architecture' },
                            { Id: 7, Name: 'Dapibus ac facilisis in' },
                            { Id: 8, Name: 'Morbi leo risus' },
                            { Id: 9, Name: 'Porta ac consectetur ac' },
                            { Id: 10, Name: 'Vestibulum at eros' },
                        ]
                    },
                    {
                        Name: 'Proposition',
                        Pipelines: [
                            { Id: 11, Name: 'Cras justo odio' },
                            { Id: 12, Name: 'Dapibus ac facilisis in' },
                            { Id: 13, Name: 'Morbi leo risus' }
                        ]
                    },
                    {
                        Name: 'Won',
                        Pipelines: [
                            { Id: 14, Name: 'Morbi leo risus' },
                            { Id: 15, Name: 'Porta ac consectetur ac' },
                            { Id: 16, Name: 'Vestibulum at eros' }
                        ]
                    }
                ]
            }
        },
        methods:{
            onClick(){
                alert('Ok');
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
        font-weight: 600;
        font-size: 14px;
        color: #28a745;
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