<template>
    <div class="modal x-modal fade" tabindex="-1" role="dialog" :id="id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title">{{model.title}}</span>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="form-group">
                                <label for="" class="label-control kh">Name</label>
                                <div>
                                    <input type="text" class="form-control form-control-sm" v-model="model.Name"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="" class="label-control kh">Sort</label>
                                <div>
                                    <input type="number" class="form-control form-control-sm" v-model="model.Sort"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="label-control kh">Description</label>
                        <div>
                            <textarea class="form-control form-control-sm" v-model="model.Description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-sm" @click="save">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            id: {
                type: String
            },
            title: {
                type: String,
                default: 'ADD NEW STAGE'
            }
        },
        data(){
            return {
                model: {
                    title: this.title,
                    Sort: 0,
                    Name: '',
                    Description: ''
                }
            }
        },
        methods: {
            save(){
                this.$emit('save', this.model);
            }
        }
    }
</script>