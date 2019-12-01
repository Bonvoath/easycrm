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
                        <button type="button" class="btn btn-outline-secondary btn-sm"><i class="fa fa-floppy-o" aria-hidden="true"></i> {{$t('save')}}</button>
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
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Expected Revenue($)</label>
                                <div>
                                    <input type="number" class="form-control form-control-sm">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Probability(%)</label>
                                <div>
                                    <input type="number" class="form-control form-control-sm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="label-control kh">Custmer</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Email</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="label-control kh">Phone</label>
                                        <div>
                                            <input type="text" class="form-control form-control-sm">
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
                                    <input type="date" class="form-control form-control-sm">
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
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label-control kh">Company</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="" class="label-control kh">Description</label>
                                <div>
                                    <textarea type="text" class="form-control form-control-sm"></textarea>
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
                isUpdate: true
            }
        }
    }
</script>