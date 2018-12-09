<template>
  <div class="home">
    {{}}
  </div>
</template>

<script>
// @ is an alias to /src
import apis from '@/api/apis'

export default {
  name: 'home',
  methods: {
    getTestData () {
      console.log(apis)
      apis.getTest({
        url: '/'
      }).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.getTestData()
  }
}

</script>
