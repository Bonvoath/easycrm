<template>
    <div>
        <div style="background: #fff;">
            <div class="pull-left">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-kulen">
                        <li class="breadcrumb-item active" aria-current="page">{{$t('stage')}}</li>
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
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="addNew"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('create')}}</button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Stage Name</th>
                                <th>Description</th>
                                <th>Sort</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <StageFormModal id="form" @save="save"></StageFormModal>
    </div>
</template>
<script>
    import $ from 'jquery'
    import StageFormModal from './StageFormModal'
    export default {
        components: {
            StageFormModal
        },
        mounted(){
            $('#form').modal({
                backdrop: false,
                show: false
            });
        },
        methods: {
            addNew(){
                $('#form').modal('show');
            },
            save(e){
                console.log(e);
                $('#form').modal('hide');
            }
        }
    }
</script>