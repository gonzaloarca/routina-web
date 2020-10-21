<template>
    <div style="overflow:hidden;">
        <v-row >
            <v-card color="orange darken-2" height="25px" width="100%" tile class="content-container">
            </v-card>
        </v-row>
        <v-row clas="px-2">
            <v-container fluid>
                <v-row>
                    <v-col
                    v-for="cat in categories"
                    :key="cat.name"
                    :cols="qty"
                    class="col-style"
               
                    >
                    <v-img
                        :src="require(`../assets/ExploreCategories/${cat.image}`)"
                        aspect-ratio="1"
                        
                    ><span>{{cat.name}}</span></v-img>
                    </v-col>
                </v-row>
        </v-container>
        </v-row>
       
    
    </div>
  
</template>
<script>
    export default{
        name:"exploreGrid",
        props:{
            name:{
                type:String,
                required:true,
            },
            categories:{
                type: Array,
                required: true,
            },
            qty:{
                type:Number,
                required: true,
            }
          
        }
    };
</script>


<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";
.col-style{
    position:relative;
    max-width:25%;
}
    
</style>
