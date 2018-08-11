<template>
<div style="position:relative;">
    <v-text-field
        v-model="keyword"
        :counter="limit"
        :label="label"
        required
        v-on:keyup.enter="onSubmit"
        v-on:keyup.prevent="$emit('input', keyword)"
    />
    <v-btn icon style="position:absolute; top:-8px; right:-10px;" @click.prevent="onSubmit">
        <v-icon>search</v-icon>
    </v-btn>
</div>
</template>




<script>
export default{
    name: 'SearchForm',

    // ========== props ========== //
    props:{
        'label' : {
            type: String,
            default(){ return '내용을 입력해 주세요' }
        },

        'limit' : {
            type: [Number, null],
            default(){ return null }
        },

        'options': {
            type: Boolean
        }

    }, // ========== props ========== //



    // ========== data ========== //
    data(){
        return {

            keyword: '',

        }
    }, // ========== data ========== //
    
    
    
    
    // ========== created ========== //
    created(){
    }, // ========== created ========== //
    
    
    


    // ========== updated ========== //
    updated(){
    }, // ========== updated ========== //
    
    



    
    // ========== data ========== //
    methods:{

        onSubmit(){
            this.$emit('onSubmit', this.keyword)
        }
        
    }, // ========== data ========== //
}
</script>