<template>
    <div class="[row]">
        <div class="[col-sm-4]">
            <div class="[card]">
                <div class="recipe">
                <h1>Recipes</h1>
                    </div>
                </div>
            </div>
        </div>    
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      api: []
    }
  },
  mounted () {
  axios
    .get('http://www.recipepuppy.com/api')
    .then(function(res){
      console.log('data: ',res);
    })
    .catch(function(error){
      console.log('error: ', error);
    })
  }
}
</script>