<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page">
                    <router-link to="/employee">Employees</router-link>
                </li>
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
                        <div class="col-sm-6">
                            <h5 class="font-moul" style="font-size: 14px;">PERSONAL INFORMATIONS</h5>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Khmer Name</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.khmer_name"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Latin Name</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.latin_name"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Date of Birth</label>
                                        <div>
                                            <input type="date" class="form-control form-control-sm kh" v-model="date.dob"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Sex</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.sex">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Nationality</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.nationality">
                                                <option value="">Select</option>                                                
                                                <option v-for="ret in nationals" :value="ret.Id" :key="ret.Id">{{ret.Name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Religion</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.religion">
                                                <option value="">Select</option>
                                                <option v-for="ret in religions" :value="ret.Name" :key="ret.Id">{{ret.Name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Phone</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Email</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.email"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Facebook</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" v-model="model.Facebook"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">ID Card Number</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.id_card"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Date Created</label>
                                        <div>
                                            <input type="date" class="form-control form-control-sm kh" v-model="date.idCreated"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Create At</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.IdCardAt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Phenomenon</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.IdCardIdentity"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Height(Cm)</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.Height"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px; margin-top: 10px;">PLACE OF BIRTH</h5>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Home No</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.HomeNo"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Streen No</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.StreetNo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="text" class="form-control form-control-sm kh" v-model="model.address"/>
                        </div>
                        <div class="col-sm-6">
                            <h5 style="font-size: 14px;">EDUCATION & SKILL INFO</h5>
                            <div class="form-group">
                                <label class="label-control kh">Education Level</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.Education"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">Professional</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.EduLevel" />
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px; margin-top: 10px;">FARMILY INFORMATION</h5>
                            <div class="form-group">
                                <label class="label-control kh">Father Name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.FatherName"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">Mother Name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.MotherName"/>
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px; margin-top: 10px;">JOB INFORMATIONS</h5>
                            <div class="form-group">
                                <label class="label-control kh">Job Title</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm kh" v-model="model.Job"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Join Date</label>
                                        <div>
                                            <input type="date" class="form-control form-control-sm kh" v-model="date.join"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Salary</label>
                                        <div>
                                            <input type="number" class="form-control form-control-sm kh" v-model="model.Salary"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 class="font-moul" style="font-size: 14px; margin-top: 10px;">CURRENT ADDRESS</h5>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Home No</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.PobHome"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Street No</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.PobStreet"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="text" class="form-control form-control-sm kh" v-model="model.Pod"/>
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
            return {
                title: this.$t('new'),
                model: {
                    khmer_name: '',
                    latin_name: '',
                    sex: 'M'
                },
                date: {
                    dob: '',
                    id_created: '',
                    join: ''
                },
                nationals: [],
                religions: [],
                isUpdate: false
            }
        },
        created(){
            this.init();
            let id = this.$route.params.id;
            if(id != undefined && id != ''){
                this.findById(id);
                this.isUpdate = true;
            }
        },
        methods: {
            findById(id){
                let loading = this.$loading.show();
                this.$api().post('employee/find', { id: id }).then(res => {
                    if(this.$isValid(res)){
                        let data = res.data.Data;
                        this.model = data;
                        this.title = this.$t('update') + ' / [' + this.model.khmer_name + ']';
                        this.date.dob = this.$format(data.dob, 'YYYY-MM-DD');
                        this.date.idCreated = this.$format(data.IdCardCreated, 'YYYY-MM-DD');
                        this.date.join = this.$format(data.JoinDate, 'YYYY-MM-DD');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            onSaveClick(){
                if(this.isUpdate) this.dbUpdate();
                else this.dbSave();
            },
            dbSave(){
                let loading = this.$loading.show();
                this.model.created_by = this.$user();
                this.model.dob = this.date.dob;
                this.$api().post('employee/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/employee');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            dbUpdate(){
                let loading = this.$loading.show();
                let req = {
                    _id: this.model._id,
                    fields:{
                        khmer_name: this.model.khmer_name,
                        latin_name: this.model.latin_name,
                        dob: this.date.dob,
                        sex: this.model.sex,
                        id_card: this.model.id_card,
                        updated_by: this.$user()
                    }
                };
                this.$api().post('employee/update', req).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/employee');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            init(){
                let loading = this.$loading.show();
                this.$api().post('employee/default').then(res=>{
                    if(this.$isValid(res)){
                        //let data = res.data.Data;
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            }
        }
    }
</script>