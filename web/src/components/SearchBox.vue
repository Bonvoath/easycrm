<template>
    <div class="search-box" :style="{width:width}" v-on-clickaway="away">
        <input type="text" class="form-control form-control-sm"
            v-model="text"
            @focus="focus"
            @keypress="keypress"/>
        <i class="fa fa-search" aria-hidden="true"></i>
        <div class="dropdown" v-if="isOpen">
            <div v-for="ret in fieldSearchs" :key="ret" class="dropdown-item" @click="itemClick(ret)">Search by field <b>{{ret}}</b></div>
        </div>
    </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
    mixins: [ clickaway ],
    props: {
        width: {
            type: String,
            default: '250px'
        },
        fields: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            fieldSearchs: this.fields,
            text: '',
            isOpen: false
        }
    },
    methods: {
        away: function() {
            this.isOpen = false;
        },
        focus(){
            if(this.text != ''){
                this.isOpen = true;
            }
        },
        keypress(){
            if(this.text != ''){
                this.isOpen = true;
            }
        },
        itemClick(){
            this.isOpen = false;
        }
    }
}
</script>
<style scoped>
    .search-box{
        position: relative;
        display: inline-block;
    }
    .search-box .form-control{
        padding-right: 20px;
    }
    .search-box i{
        position: absolute;
        top: 0;
        right: 0;
        color:rgba(0, 0, 0, 0.6);
        padding: 8px 5px;
    }
    .search-box .dropdown{
        position: absolute;
        background: #fff;
        right: 0;
        left: 0;
        z-index: 3;
        border: 1px solid #ddd;
        margin-top: 1px;
    }
    .search-box .dropdown .dropdown-item{
        padding: 3px 12px;
        border: none;
        font-size: 13px;
        color:rgba(0, 0, 0, 0.4);
        font-style: italic;
    }
</style>