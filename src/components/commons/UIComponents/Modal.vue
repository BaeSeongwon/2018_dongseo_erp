<template>
    
<v-card>
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-card-text >
        <slot name="contents">
            <h1>123</h1>
            Let Google help apps determine location. <br>
            This means sending anonymous location data to Google, <br>
            even when no apps are running.
            <br><br>
        </slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
            <slot name="bottom">
                <v-btn color="green darken-1" flat @click.native="dialog = false">닫기</v-btn>
                <v-btn color="green darken-1" flat @click.native="dialog = false">확인</v-btn>
            </slot>
        </v-card-actions>
</v-card>

</template>



<script>
export default {
    name : 'Modal',


    props: {
        

        'title': {
            type: String, 
            default(){ return 'Modal title' }
        }

    },

    data(){
        return {

            dialog: false,

        }
    }
}
</script>