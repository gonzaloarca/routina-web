<template>
    <div style="overflow:hidden; position:relative; width:100%; align-items:center; justify-content:center" >
        <v-row >
            <v-card color="orange darken-2" height="25px" width="100%" tile class="content-container">
            </v-card>
        </v-row>
        <div style=" position:relative; width:100%; align-items:center; justify-content:center" >
            <v-row class="row-style"  justify="center">
            <v-container style="width:75%" fluid>
                <v-row>
                    <v-col
                        v-for="cat in categories"
                        :key="cat.name"
                        :cols="3"
                        class="col-style"
                    >
                        <CategoryCard :name="cat.name" :image="cat.image" width=100% ></CategoryCard>
                    </v-col>
                    
                </v-row>
            </v-container>
            </v-row>
        </div>
        
        
       
    
    </div>
  
</template>
<script>
import CategoryCard from "../components/CategoryCard";
    export default{
        name:"ExploreGrid",
        components:{CategoryCard},
        props:{
            name:{
                type:String,
                required:true,
            },
            categories:{
                type: Array,
                required: true,
            },
          
        }
    };
</script>


<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";
.col-style{
    position:relative;
 
    padding:10px 10px 10px 10px;
    
}
.row-style{
    margin-right:0px; 
    margin-left:0px;
    align-items:center;
    justify-content: center;
    width:100%;
}
    
</style>
