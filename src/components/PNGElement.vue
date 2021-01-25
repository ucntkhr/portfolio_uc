<template>
  <component :is="png"/>
</template>

<script>
export default {
  name: "PNGElement",
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    png() {
      return () => import(`@/assets/${this.name}.png`)
    }
  }
}
</script>