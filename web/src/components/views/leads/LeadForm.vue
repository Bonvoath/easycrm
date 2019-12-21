<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/lead">{{$t('lead')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="model.status==1" @click="onSaveClick"><i class="fa fa-floppy-o" aria-hidden="true"></i> {{$t('save')}}</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate && model.status==1" @click="onConvertLead"><i class="fa fa-recycle" aria-hidden="true"></i> Convert To Opportunity</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate && model.status==1" @click="onMarkLose"><i class="fa fa-eye-slash" aria-hidden="true"></i> Mark As Lose</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate && model.status!=1" @click="onRestoreClick"><i class="fa fa-eye-slash" aria-hidden="true"></i> Restore</button>
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
                                        <option value="Cambodia">Cambodia</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Saleperson</label>
                                        <div>
                                            <select type="text" class="form-control form-control-sm" v-model="model.sale_per_id">
                                                <option value="">Select</option>
                                                <option v-for="ret in reps" :key="ret._id" :value="ret._id">{{ret.latin_name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Sale Team</label>
                                        <div>
                                            <select type="text" class="form-control form-control-sm" v-model="model.sale_team_id">
                                                <option value="">Select</option>
                                                <option v-for="ret in teams" :key="ret._id" :value="ret._id">{{ret.name}}</option>
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
                                    <input type="text" class="form-control form-control-sm" v-model="model.customer">
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
                                    <StarRating :star-size="20" :rounded-corners="true" :show-rating="false" v-model.number="model.priority"></StarRating>
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
    import StarRating from 'vue-star-rating'
    export default {
        components: {
            LeadActivity,
            StarRating
        },
        data(){
            return {
                title: this.$t('new'),
                model: {
                    name: '',
                    sale_per_id: '',
                    country: '',
                    sale_team_id: '',
                    priority: '',
                    sort: 0,
                    status: 1
                },
                tags: [],
                teams: [],
                reps: [],
                isUpdate: false
            }
        },
        created(){
            this.$api().post('lead/listDefault').then(res => {
                if(this.$isValid(res)){
                    this.tags = res.data.Data.tags;
                    this.teams = res.data.Data.saleteams;
                    this.reps = res.data.Data.employees;
                }
            });
            let id = this.$route.params.id;
            if(id != undefined && id != ''){
                this.isUpdate = true;
                this.findById(id);
            }
        },
        methods: {
            findById(id){
                this.$api().post('lead/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                        this.title = this.$t('update') + ' / [' + this.model.name + ']';
                    }
                });
            },
            onSaveClick(){
                if(this.isUpdate){
                    let req = {
                        _id: this.model._id,
                        fields: {
                            name: this.model.name,
                            customer: this.model.customer,
                            job_position: this.model.job_position,
                            email: this.model.email,
                            phone: this.model.phone,
                            mobile: this.model.mobile,
                            company: this.model.company,
                            address: this.model.address,
                            city: this.model.city,
                            state: this.model.state,
                            zip: this.model.zip,
                            country: this.model.country,
                            sale_per_id: this.model.sale_per_id,
                            sale_team_id: this.model.sale_team_id,
                            priority: this.model.priority,
                            description: this.model.description,
                            updated_by: this.$user()
                        }
                    };
                    this.$api().post('lead/update', req).then(res => {
                        if(this.$isValid(res)){
                            this.$router.push('/lead');
                        }
                    });
                }else{
                    this.model.created_by = this.$user()
                    this.$api().post('lead/save', this.model).then(res => {
                        if(this.$isValid(res)){
                            this.$router.push('/lead');
                        }
                    });
                }
            },
            onConvertLead(){
                this.model.created_by = this.$user()
                this.$api().post('lead/convert', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/lead');
                    }
                });
            },
            onMarkLose(){
                let req = {
                    _id: this.model._id,
                    fields: {
                        status: 2,
                        date_losed: Date.now(),
                        lose_by_id: this.$user()
                    }
                };
                this.$api().post('lead/update', req).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/lead');
                    }
                });
            },
            onRestoreClick(){
                let req = {
                    _id: this.model._id,
                    fields: {
                        status: 1,
                        date_restored: Date.now(),
                        restore_by_id: this.$user()
                    }
                };
                this.$api().post('lead/update', req).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/lead');
                    }
                });
            }
        }
    }
</script>