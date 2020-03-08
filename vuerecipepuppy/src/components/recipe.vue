<template>
    <div class="[row]">
        <div class="[col-sm-4]">
            <div class="[card]">
                <div class="recipe">
                <h1>Recipes</h1>
                <img: src="data.results.thumbnail">
                <h2>Title: {{ data.results.title }}</h2>
                <p>Ingredients{{ data.results.ingredients }}</p>
                <a href="data.results.href"></a>
                    </div>
                </div>
            </div>
        </div>    
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      api: []
    }
  },
  mounted () {
  axios
    .get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api')
    .then(function(res){
      console.log('data: ',res);
    })
    .catch(function(error){
      console.log('error: ', error);
    })
  }
}
</script>

<style>
img{
max-width: 50vw;
}
</style>