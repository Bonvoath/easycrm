<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/project">{{$t('project')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
            </ol>
        </nav>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        created(){
            //let id = this.$route.params.id;
            //findTaskByProjectId(id);
        },
        methods: {
            // findTaskByProjectId(projectId){
            //     this.$api().post()
            // }
        }
    }
</script>