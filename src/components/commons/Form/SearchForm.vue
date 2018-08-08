<template>
<v-form v-model="valid" style="position:relative;">
    <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
    />
    <v-btn icon style="position:absolute; top:-8px; right:-10px;">
        <v-icon>search</v-icon>
    </v-btn>
</v-form>
</template>




<script>
export default{
    name: 'SearchForm',

    // ========== props ========== //
    props:{
        'label' : {
            type: String
        },

        'options': {
            type: Boolean
        }

    }, // ========== props ========== //



    // ========== data ========== //
    data(){
        return {



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
        
    }, // ========== data ========== //
}
</script>