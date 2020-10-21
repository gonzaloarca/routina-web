<template>
  <div class="centered-div">
    <v-btn text v-on:click="clickEvent" style="position:absolute; width:100%; height:100%; z-index:30"></v-btn>
    <div class="pa-2" style="z-index:3;"><h2 style="text-transform:uppercase; text-align:center">{{name}}</h2></div>
    <div style="backdrop-filter:blur(4px) brightness(0.6); position:absolute; z-index:2; width:100%;" class="image-format"></div>
    <img :src="require(`../assets/ExploreCategories/${image}`)" class="image-format " alt="name" tile/>
  </div>
</template>

<script>


export default {
  name: "CategoryCard",
  props: {
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
  },
  methods:{
    clickEvent(event){
      
      event.emitter=this.name;
      this.$emit('click',event);
    }
  }
  
};
</script>



<style scoped lang="scss">
@import "~vuetify/src/styles/styles.sass";

.image-format{
    position:absolute;
    max-width:100%;
    height:200px;
    z-index: 1;
    object-fit:cover;
    
}





.centered-div{
    align-items: center;
    justify-content: center;
   
    overflow: hidden;
    display:flex;
    position:relative;
    height:200px;
    width:200px;

}

.centered-div:hover{
  text-decoration: underline !important;
}
</style>