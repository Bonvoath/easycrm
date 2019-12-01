<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb font-kulen">
                <li class="breadcrumb-item" aria-current="page">
                    <router-link to="/employee">Employees</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">New</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click="save"><i class="fa fa-plus-circle" aria-hidden="true"></i> រក្សាទុក</button>
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
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.KhmerName"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Latin Name</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.LatinName"/>
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
                                            <select class="form-control form-control-sm kh" v-model="model.Sex">
                                                <option value="1">ប្រុស</option>
                                                <option value="2">ស្រី</option>
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
                                            <select class="form-control form-control-sm kh" v-model="model.Nationality">
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
                                            <select class="form-control form-control-sm kh" v-model="model.Religion">
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
                                            <input type="text" class="form-control form-control-sm" v-model="model.Phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Email</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.Email"/>
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
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.IdCard"/>
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
                            <input type="text" class="form-control form-control-sm kh" v-model="model.Address" disabled/>
                            <div style="padding: 5px 0;">
                                <button type="button" class="btn btn-success btn-sm kh" @click="showLoc(2)">Choose</button>  &nbsp;
                                <button type="button" class="btn btn-danger btn-sm kh">Clear</button>
                            </div>
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
                            <input type="text" class="form-control form-control-sm kh" v-model="model.Pod" disabled/>
                            <div style="padding: 5px 0;">
                                <button type="button" class="btn btn-success btn-sm" @click="showLoc(2)">Choose</button>  &nbsp;
                                <button type="button" class="btn btn-danger btn-sm">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LocationSelect id="frmLoc" size="modal-lg"></LocationSelect>
    </div>
</template>
<script>
    import LocationSelect from '../locations/Select';
    import $ from 'jquery';
    export default {
        components:{
            LocationSelect
        },
        data(){
            return {
                model: {
                    KhmerName: '',
                    Sex: 1,
                    IdCard: '',
                    Phone: '',
                    CreatedBy: sessionStorage.getItem('jwt@user')
                },
                date: {
                    dob: '',
                    idCreated: '',
                    join: ''
                },
                nationals: [],
                religions: [],
                loctype: 0
            }
        },
        created(){
            this.init();
            let id = this.$route.params.id;
            if(id != undefined && id != ''){
                let loading = this.$loading.show();
                this.$api().post('api/employee/get', {Id: id}).then(res=>{
                    if(this.$isValid(res)){
                        let data = res.data.Data;
                        this.model = data;
                        this.date.dob = this.$format(data.Dob, 'YYYY-MM-DD');
                        this.date.idCreated = this.$format(data.IdCardCreated, 'YYYY-MM-DD');
                        this.date.join = this.$format(data.JoinDate, 'YYYY-MM-DD');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            }
        },
        mounted: function(){
            $('#frmLoc').modal({
                backdrop: false,
                show: false
            });
        },
        methods: {
            save(){
                let loading = this.$loading.show();
                this.model.Dob = this.date.dob;
                this.model.IdCardCreated = this.date.idCreated;
                this.model.JoinDate = this.date.join;
                this.$api().post('api/employee/save', this.model).then(res => {
                    if(this.$isValid(res)){
                        this.$router.push('/admin/employee');
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            init(){
                let loading = this.$loading.show();
                this.$api().post('api/employee/default').then(res=>{
                    if(this.$isValid(res)){
                        let data = res.data.Data;
                        this.nationals = data.Nationalities;
                        this.religions = data.Religions;
                    }
                }).catch(error => {
                    this.$toasted.show(error);
                }).finally(() => { loading.hide(); });
            },
            showLoc(n){
                this.loading = n;
                $('#frmLoc').modal('show');
            }
        }
    }
</script>