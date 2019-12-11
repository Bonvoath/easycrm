<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/">{{$t('pipeline')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{$t('new')}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="onSave"><i class="fa fa-floppy-o" aria-hidden="true"></i> {{$t('save')}}</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate"><i class="fa fa-recycle" aria-hidden="true"></i> Mark As Won</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm" v-if="isUpdate"><i class="fa fa-eye-slash" aria-hidden="true"></i> Mask As Lose</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label class="label-control kh">Opportunity</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Expected Revenue($)</label>
                                <div>
                                    <input type="number" class="form-control form-control-sm" v-model="model.expected_revenue">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Probability(%)</label>
                                <div>
                                    <input type="number" class="form-control form-control-sm" v-model="model.probability">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Customer</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.customer">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Email</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.email">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Phone</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.phone">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Saleperson</label>
                                <div>
                                    <select type="text" class="form-control form-control-sm"></select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Sale Team</label>
                                <div>
                                    <select type="text" class="form-control form-control-sm"></select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Expected Closed</label>
                                <div>
                                    <input type="date" class="form-control form-control-sm" v-model="expected_closed">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">Priority</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">Tag</label>
                                <div>
                                    <select class="form-control form-control-sm" v-model="model.tag_id">
                                        <option value="">Not Set</option>
                                        <option v-for="ret in tags" :key="ret._id" :value="ret._id">{{ret.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">Company</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.company">
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
    import LeadActivity from '../leads/LeadActivity';
    export default {
        components: {
            LeadActivity
        },
        data(){
            return {
                model: {
                    tag_id: '',
                    probability: 0
                },
                isUpdate: false,
                expected_closed: '',
                tags: [],
                teams: [],
                reps: []
            }
        },
        created: function(){
            this.$api().post('pipeline/listDefault').then(res => {
                if(this.$isValid(res)){
                    this.tags = res.data.Data.tags;
                }
            });

            let id = this.$route.params.id;
            if(id != undefined && id != ''){
                this.isUpdate = true;
                this.findById(id);
            }
        },
        methods: {
            onSave(){
                let loading = this.$loading.show();
                if(this.isUpdate){
                    var req = {
                        _id: this.model._id,
                        fields: {
                            name: this.model.name,
                            probability: this.model.probability,
                            expected_revenue: this.model.expected_revenue,
                            expected_closed: this.expected_closed,
                            description: this.model.description,
                            customer: this.model.customer,
                            phone: this.model.phone,
                            email: this.model.email,
                            company: this.model.company,
                            tag_id: this.model.tag_id,
                            updated_by: this.$user()
                        }
                    };
                    this.$api().post('pipeline/update', req).then(res => {
                        if(this.$isValid(res)){
                            this.$router.push('/');
                        }
                    }).finally(function(){ loading.hide(); });
                }else{
                    this.model.expected_closed = this.expected_closed;
                    this.model.created_by = this.$user()
                    this.$api().post('pipeline/save', this.model).then(res => {
                        if(this.$isValid(res)){
                            this.$router.push('/');
                        }
                    }).finally(function(){ loading.hide(); });
                }
            },
            findById(id){
                var loading = this.$loading.show();
                this.$api().post('pipeline/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                        if(this.model.expected_closed != undefined && this.model.expected_closed != ''){
                            this.expected_closed = this.$format(this.model.expected_closed, 'YYYY-MM-DD');
                        }
                    }
                }).finally(() => { loading.hide(); });
            }
        }
    }
</script>
<style scoped>
    .error .form-control,
    .error .kh {
        border-color: #e05260 !important;
    }
</style>