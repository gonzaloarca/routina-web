<template>
    <div>
       
        <v-card class="tab-head" tile>
            <v-card class="tab-icon" tile background-color="focus? orange darken-3 : $dark-grey">
                <v-icon color="white">{{icon}}</v-icon>
            </v-card>
            <span height="100%" class="cont-text" >
                <h3>{{name}}</h3>
            </span>
            
        </v-card>
    </div>
  
</template>
<script>
    export default{
        name:"ExploreTabhead",
        props:{
            name:{
                type:String,
                required:true,
            },
            icon:{
                type:String,
                required:true,
            },
            focus:{
                type:Boolean,
                required:true,
            },
        }
    };
</script>


<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";
    $light-grey:#575757;
    $dark-grey:#1d1d1d;
    .tab-head{
        position:relative;
        background-color:$light-grey;
        display:flex;
        align-items: center;
        justify-content: center;
        width:150px;
        height:40px;
        
    }
    .tab-icon{
        position:absolute;
        left:0;
        display:flex;
        align-items: center;
        justify-content:center;
        // background-color:$dark-grey;
        width:25%;
        height:100%;
    }

    .cont-text{
        position:absolute; 
        width:75%; 
        right:0; 
        display:flex; 
        align-items:center; 
        justify-content:center;
    }

</style>
