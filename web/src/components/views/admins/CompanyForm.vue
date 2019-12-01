<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">{{$t('company')}}</li>
            </ol>
        </nav>
        <div class="content">
            <div class="card card-form">
                <div class="card-header">
                    <div class="toolbar">
                        <button to="/admin/employee/create" class="btn btn-outline-secondary btn-sm"><i class="fa fa-plus-circle" aria-hidden="true"></i> {{$t('save')}}</button>
                    </div>
                </div>
                <div class="card-body" ref="box">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                        <label class="label-control kh">{{$t('company_name')}}</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.Name">
                                        </div>
                                    </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">{{$t('company_type')}}</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.CompanyTypeId">
                                                <option value="">Select</option>
                                                <option v-for="ret in types" :value="ret.Id" :key="ret.Id">{{ret.Name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Owner's Name</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm kh" v-model="model.OwnerName">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Sex</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.Sex">
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Nationality</label>
                                        <div>
                                            <select class="form-control form-control-sm kh" v-model="model.Nationality">
                                                <option value="">Select</option>
                                                <option v-for="ret in nationalities" :value="ret.Id" :key="ret.Id">{{ret.Name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Home No</label>
                                        <div><input type="text" class="form-control form-control-sm kh" v-model="model.HomeNo"/></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">Street No</label>
                                        <div><input type="text" class="form-control form-control-sm" v-model="model.StreetNo"/></div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="" class="label-control kh">Address</label>
                                <div><input type="text" class="form-control form-control-sm kh" v-model="model.Address" disabled></div>
                                <div style="padding: 5px 0;">
                                    <button type="button" class="btn btn-success btn-sm kh" @click="showLoc">ជ្រើសរើស</button>  &nbsp;
                                    <button type="button" class="btn btn-danger btn-sm kh">សំអាត</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">{{$t('phone')}}</label>
                                        <div><input type="text" class="form-control form-control-sm kh" v-model="model.Phone" /></div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="" class="label-control kh">{{$t('email')}}</label>
                                        <div><input type="text" class="form-control form-control-sm kh" v-model="model.Email" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <GmapMap
                                ref="map"
                                :center="currentLocation"
                                :zoom="16"
                                map-type-id="terrain"
                                @dragend="updateCenter"
                                v-bind:style="{width: mwidth+'%', height: mheight + 'px'}">
                                <GmapMarker
                                    :position.sync="currentLocation"
                                    :clickable="true"
                                    :draggable="true"
                                    @dragend="updateLocation($event)"
                                />
                                </GmapMap>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LocationSelect id="frmLoc" size="modal-lg"></LocationSelect>
    </div>
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyARe_BE39LfMaeApNu3-_vR7sy3lfjfCBk',
    libraries: 'places',
  },
  installComponents: true
});
import LocationSelect from '../locations/Select';
import $ from 'jquery';
export default {
    components:{
        LocationSelect
    },
    data() {
        return {
            currentLocation : { lat : 0, lng : 0},
            mheight: 0,
            mwidth: 100,
            model: {
                CompanyTypeId: '',
                Nationality: ''
            },
            types: [],
            nationalities: []
        }
    },
    created: function(){
        this.init();
        let req = {
            UserName: this.$user()
        };
        this.$api().post('api/company/get', req).then(res => {
            console.log(res)
            if(this.$isValid(res)){
                this.model = res.data.Data;
            }
        });
    },
    mounted : function() {
        this.mheight = this.$refs.box.clientHeight - 50;
        this.geolocation();
        $('#frmLoc').modal({
            backdrop: false,
            show: false
        });
    },
    methods: {
        geolocation : function() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        },
        updateCenter: function(){
            this.$refs.map.$mapPromise.then((map) => {
                this.currentLocation = {
                    lat: map.center.lat(),
                    lng: map.center.lng()
                };
            });
        },
        updateLocation: function(e){
            this.currentLocation = e.latLng;
        },
        init(){
            let loading = this.$loading.show();
            this.$api().post('api/company/default').then(res=>{
                if(this.$isValid(res)){
                    let data = res.data.Data;
                    this.types = data.CompanyTypes;
                    this.nationalities = data.Nationalities;
                }
            }).catch(error => {
                this.$toasted.show(error);
            }).finally(() => { loading.hide(); });
        },
        showLoc(){
            $('#frmLoc').modal('show');
        }
    }
}
</script>