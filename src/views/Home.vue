<template>

  <div class="home">
    <section class="protagonist hero is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="words title is-light">
            【 <span class="fas fa-rocket"></span> Under Construction Hero <span class="fas fa-robot"></span> 】
          </h1>
          <p class="words subtitle">
            ucntkhr's Portfolio (with Bulma)
          </p>
        </div>
      </div> 
      <div class="hero-foot is-hidden-mobile has-background-white">
        <div class="hero-foot--wrapper">
          <div class="columns">
            <div class="column is-12 hero-menu-desktop has-text-centered">
              <ul>
                <li class="is-active"><a href="#home">Home</a></li> 
                <li><a href="#profile">Profile</a></li> 
                <li><a href="#skill">Skill</a></li> 
                <li><a href="#work">Work</a></li> 
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

  .protagonist {
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: linear-gradient(to bottom, #F3F3F5, #E90B8B, #352384, #333447);
  }

  .words {
    color: #F3F3F5
  }

</style>
