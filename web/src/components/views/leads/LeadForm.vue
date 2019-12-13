<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/lead">{{$t('lead')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{$t('new')}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="onSaveClick"><i class="fa fa-floppy-o" aria-hidden="true"></i> {{$t('save')}}</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate"><i class="fa fa-recycle" aria-hidden="true"></i> Convert To Opportunity</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate"><i class="fa fa-eye-slash" aria-hidden="true"></i> Mask As Lose</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="" class="label-control kh">Lead</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="" class="label-control kh">Company name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.company">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Address</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.address">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">City</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.city">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">State</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.state">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Zip</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.zip">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Country</label>
                                <div>
                                    <select type="text" class="form-control form-control-sm" v-model="model.country">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Saleperson</label>
                                        <div>
                                            <select type="text" class="form-control form-control-sm" v-model="model.sale_per_id">
                                                <option value="">Not Set</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Sale Team</label>
                                        <div>
                                            <select type="text" class="form-control form-control-sm" v-model="model.sale_team_id">
                                                <option value="">Not Set</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="" class="label-control kh">Contact name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.contact_name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Job Position</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.job_position">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Email</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                <label for="" class="label-control kh">Phone</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.phone">
                                </div>
                            </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Mobile</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.mobile">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Priority</label>
                                <div>
                                    <select type="text" class="form-control form-control-sm" v-model="model.priority">
                                        <option value="">Not Set</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="" class="label-control kh">Description</label>
                                <div>
                                    <textarea type="text" class="form-control form-control-sm" v-model="model.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LeadActivity v-if="isUpdate"></LeadActivity>
    </div>
</template>
<script>
    import LeadActivity from './LeadActivity';
    export default {
        components: {
            LeadActivity
        },
        data(){
            return {
                model: {

                },
                teams: [],
                isUpdate: false
            }
        },
        created(){
            this.$api().post('lead/listDefault').then(res => {
                if(this.$isValid(res)){
                    this.teams = res.data.Data.saleTeams;
                }
            });
            let id = this.$route.params.id;
            if(id != undefined && id != ''){
                this.findById(id);
            }
        },
        methods: {
            findById(id){
                this.$api().post('lead/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                    }
                });
            },
            onSaveClick(){
                if(this.isUpdate){
                    let req = {
                        _id: this.model._id,
                        fields: {
                            name: this.model.name
                        }
                    };
                    this.$api().post('lead/update', req).then(res => {
                        if(this.$isValid(res)){
                            this.$router.push('/lead');
                        }
                    });
                }else{
                    this.$api().post('lead/save', this.model).then(res => {
                        if(this.$isValid(res)){
                            this.$router.push('/lead');
                        }
                    });
                }
            }
        }
    }
</script>