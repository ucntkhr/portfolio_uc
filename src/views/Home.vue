<template>

  <div class="home">
    <section class="hero is-dark is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            【 <span class="fas fa-rocket"></span> Under Construction Hero <span class="fas fa-robot"></span> 】
          </h1>
          <p class="subtitle">
            ucntkhr's Portfolio <strong>(with Bulma)</strong>
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
