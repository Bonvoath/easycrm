<template>
    <div class="modal x-modal fade" tabindex="-1" role="dialog" :id="id">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title">{{titleBar}}</span>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot></slot>
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
                default: 'ADD NEW'
            }
        },
        data(){
            return {
                titleBar: this.title
            }
        },
        methods: {
            save(){
                this.$emit('save');
            }
        },
        watch: {
            title(value){
                this.titleBar = value;
            }
        }
    }
</script>