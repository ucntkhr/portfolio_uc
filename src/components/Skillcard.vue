<template>
  <div class="column is-4-desktop">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title is-centered">
          <span class="icon icon-margin">
            <i v-bind:class="icon" v-bind:style="fontSize"></i>
          </span>
          {{ name }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <p class="pre-line">{{ desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Skillcard",

  props: {
    name: String,

    icon: {
      type: String,
      default: 'fas fa-code'
    },
    desc: String,

  },

	data() {
		return {
			fontSize: '',
    }
  }

}

</script>