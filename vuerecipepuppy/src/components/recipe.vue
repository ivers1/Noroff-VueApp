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
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('http://https://www.recipepuppy.com/api/results')
    .then(response => {
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>