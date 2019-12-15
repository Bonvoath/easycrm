<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page"><router-link to="/contact">{{$t('contact')}}</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="onSaveClick"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('save')}}</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6 col-lg-6">
                            <div class="o_field_radio">
                                <div class="o_field_radio_item">
                                    <label class="label-control kh">
                                        <input type="radio" value="Individual" v-model="model.type"/> Individual
                                    </label>
                                </div>
                                <div class="o_field_radio_item">
                                    <label class="label-control kh">
                                        <input type="radio" value="Company" v-model="model.type"/> Company
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label class="label-control kh">Name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" placeholder="Name" v-model="model.name"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label for="" class="label-control kh">Address</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.address"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 div lg-4">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">City</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.city"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 div lg-4">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">State</label>
                                        <div><input type="text" class="form-control form-control-sm" v-model="model.state"/></div>
                                    </div>
                                </div>
                                <div class="col-sm-4 div lg-4">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Zip</label>
                                        <div><input type="text" class="form-control form-control-sm" v-model="model.zip"/></div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Country</label>
                                <div><input type="text" class="form-control form-control-sm" v-model="model.country"/></div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Tax ID</label>
                                <div><input type="text" class="form-control form-control-sm" v-model="model.tax_id"/></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-6">
                            <div class="form-group">
                                <label for="" class="label-control kh">Phone</label>
                                <div><input type="text" class="form-control form-control-sm" v-model="model.phone"/></div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Mobile</label>
                                <div><input type="text" class="form-control form-control-sm" v-model="model.mobile"/></div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Email</label>
                                <div><input type="text" class="form-control form-control-sm" v-model="model.email"/></div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Website</label>
                                <div><input type="text" class="form-control form-control-sm" v-model="model.website"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title: this.$t('new'),
                model: {
                    type: 'Individual'
                },
                isUpdate: false
            }
        },
        created(){
            let id = this.$route.params.id;
            if(!this.isNullOrEmpty(id)){
                this.isUpdate = true;
                this.findById(id);
            }
        },
        methods: {
            findById(id){
                let loading = this.$loading.show();
                this.$api().post('customer/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        this.model = res.data.Data;
                        this.title = this.$t('update') + ' / [' + this.model.name + ']';
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            init(){

            },
            onSaveClick(){
                if(this.isUpdate) this.dbUpdate();
                else this.dbSave();
            },
            dbSave(){
                let loading = this.$loading.show();
                this.model.created_by = this.$user()
                this.$api().post('customer/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/contact');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            dbUpdate(){
                let loading = this.$loading.show();
                let req = {
                    _id: this.model._id,
                    fields: {
                        name: this.model.name,
                        type: this.model.type,
                        address: this.model.address,
                        city: this.model.city,
                        state: this.model.state,
                        zip: this.model.zip,
                        country: this.model.country,
                        tax_id: this.model.tax_id,
                        phone: this.model.phone,
                        mobile: this.model.mobile,
                        email: this.model.email,
                        website: this.model.website,
                        updated_by: this.$user()
                    }
                };
                this.$api().post('customer/update', req).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/contact');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            }
        }
    }
</script>
<style scoped>
    .o_field_radio{
        display: inline-flex;
    }
    .o_field_radio_item{
        margin-right: 20px;
    }
</style>