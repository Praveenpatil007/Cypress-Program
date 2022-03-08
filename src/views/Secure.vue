<template>
  <div class="secure">
    <h1>This is an secure page</h1>
  </div>
</template>


<script>
    export default {
        name: 'Secure',
        data() {
          return {}
        },
        mounted() {
            if(!this.$parent.authenticated) {
                this.$router.replace({ name: "Login" });
            }
        },
        methods: {
        }
    }
</script>