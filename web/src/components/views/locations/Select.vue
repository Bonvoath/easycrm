<template>
    <div class="modal fade x_modal" role="dialog" :id="id">
        <div class="modal-dialog" v-bind:class="size">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title font-moul">ជ្រើសរើសភូមិឃុំស្រុកខេត្តក្រុង</span>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>                    
                </div>
                <div class="modal-body" style="padding: 2px;">
                    <div class="row">
                        <div class="col-sm-12">
                            <div style="border: 1px solid #ddd; padding: 5px; margin-bottom: 2px;">
                                អាសយដ្ឋាន៖ {{getAddress()}}
                            </div>
                        </div>
                    </div>
                    <div id="row" class="row">
                        <div class="col-sm-3">
                            <div class="list-group x_group">
                                <a href="javascript:void(0)" class="list-group-item" v-for="ret in location.pros"
                                        @click="onPro(ret)"
                                        :key="ret.Name"
                                        :class="{active:selected.proid==ret.Id}">{{ret.Name}}</a>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="list-group x_group">
                                <a href="javascript:void(0)" class="list-group-item" v-for="ret in location.dists"
                                        :key="ret.Name"
                                        @click="onDist(ret)"
                                        :class="{active:selected.distid==ret.Id}">{{ret.Name}}</a>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="list-group x_group">
                                <a href="javascript:void(0)" class="list-group-item" v-for="ret in location.communes"
                                        :key="ret.Name"
                                        @click="onCommune(ret)"
                                        :class="{active:selected.comid==ret.Id}">{{ret.Name}}</a>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="list-group x_group">
                                <a href="javascript:void(0)" class="list-group-item" v-for="ret in location.villages"
                                        :key="ret.Name"
                                        @click="onVillage(ret)">{{ret.Name}}</a>
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
        props: {
            id: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: ''
            }
        },
        data: function () {
            return {
                location: {
                    pros: [],
                    dists: [],
                    communes: [],
                    villages: []
                },
                tempAddress: {
                    province: '',
                    district: '',
                    commune: '',
                    village: ''
                },
                selected: {
                    proid: 0,
                    distid: 0,
                    comid: 0
                }
            }
        },
        created: function () {
            var _this = this;
            this.$api().post('location/getProvinces').then(res => {
                _this.location.pros = res.data.Data;
            });
        },
        methods: {
            onPro: function (item) {
                var _this = this;
                _this.selected.proid = item.Id;
                _this.tempAddress.province = item.Name;
                _this.$api().post('location/getDistrictByCode', {
                    pCode: item.Code
                }).then(function (res) {
                    _this.location.dists = res.data.Data;
                    _this.location.communes = [];
                    _this.location.villages = [];
                    _this.selected.comid = 0;
                    _this.selected.distid = 0;
                });
            },
            onDist: function (item) {
                var _this = this;
                _this.selected.distid = item.Id;
                _this.tempAddress.district = item.Name;
                _this.$api().post('location/getCommuneByCode', {
                    districtCode: item.Code
                }).then(function (res) {
                    _this.location.communes = res.data.Data;
                    _this.location.villages = [];
                    _this.selected.comid = 0;
                });
            },
            onCommune: function (item) {
                var _this = this;
                _this.selected.comid = item.Id;
                _this.tempAddress.commune = item.Name;
                _this.$api().post('location/getVillageByCode', {
                    communeCode: item.Code
                }).then(function (res) {
                    _this.location.villages = res.data.Data;
                });
            },
            onVillage: function (item) {
                var _this = this;
                _this.tempAddress.village = item.Name;
                var address = _this.getAddress();
                _this.location.dists = [];
                _this.location.communes = [];
                _this.location.villages = [];
                _this.selected = {
                    proid: 0,
                    distid: 0,
                    comid: 0
                };
                _this.tempAddress = {
                    province: '',
                    district: '',
                    commune: '',
                    village: ''
                };
                var sender = {
                    address: address,
                    item: item
                };
                _this.$emit('click', sender);
            },
            getAddress: function () {
                var vm = this;
                var address = '';
                address += vm.tempAddress.village !== '' ? 'ភូមិ ' + vm.tempAddress.village : '';
                address += vm.tempAddress.commune !== '' ? ' ឃុំ~សង្កាត់ ' + vm.tempAddress.commune : '';
                address += vm.tempAddress.district !== '' ? ' ក្រុង-ស្រុក-ខណ្ឌ ' + vm.tempAddress.district : '';
                address += vm.tempAddress.province !== '' ? ' រាជធានី-ខេត្ត ' + vm.tempAddress.province : '';

                return address;
            }
        }
    }
</script>
<style scoped>
    .x_modal {
        background: rgba(0, 0, 0, 0.4);
        border-radius: 3px;
    }
        .x_modal .modal-content{
            border-radius: 3px;
            overflow:hidden;
        }
    .x_group .list-group-item{
        padding: 3px 5px;
        border-radius: 0;
    }

    .x_group .list-group-item.active a{
        color: #fff !important;
    }
</style>