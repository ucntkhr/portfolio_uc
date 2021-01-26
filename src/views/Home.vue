<template>

  <div class="home">
    <section class="protagonist hero is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="words title is-light">
            【 <span class="fas fa-rocket"></span> Under Construction Heroes <span class="fas fa-robot"></span> 】
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
                <li><a href="#home">Home</a></li> 
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

    <Profile id="Profile" />

    <section class="container">

      <div class="intro column is-8 is-offset-2">
        <h2 class="title">Perfect for developers or designers!</h2><br>
        <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.</p>
      </div>

      <div class="sandbox">
        <div class="tile is-ancestor">

          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Hello World</p>
              <p class="subtitle">What is up?</p>
            </article>
          </div>

          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>

          <div class="tile is-parent is-shady">

            <article class="tile is-child notification is-white">
              <p class="title">Third column</p>
              <p class="subtitle">With some content</p>

              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>

            </article>

          </div>

        </div>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">

            <div class="tile">
                <div class="tile is-parent is-vertical">

                  <article class="tile is-child notification is-white">
                    <p class="title">Vertical tiles</p>
                    <p class="subtitle">Top box</p>
                  </article>

                  <article class="tile is-child notification is-white">
                    <p class="title">Vertical tiles</p>
                    <p class="subtitle">Bottom box</p>
                  </article>

                </div>

                <div class="tile is-parent">

                  <article class="tile is-child notification is-white">

                    <p class="title">Middle box</p>
                    <p class="subtitle">With an image</p>

                    <figure class="image is-4by3">
                      <img src="https://picsum.photos/640/480/?random" alt="Description">
                    </figure>

                  </article>

                </div>
            </div>

            <div class="tile is-parent is-shady">

              <article class="tile is-child notification is-white">
                <p class="title">Wide column</p>
                <p class="subtitle">Aligned with the right column</p>

                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>

              </article>

            </div>

          </div>

          <div class="tile is-parent is-shady">

            <article class="tile is-child notification is-white">

              <div class="content">

                <p class="title">Tall column</p>
                <p class="subtitle">With even more content</p>

                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                  eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                  <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                  felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                  <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam
                  ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                </div>

              </div>

            </article>
          </div>

        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-shady">

            <article class="tile is-child notification is-white">

              <p class="title">Side column</p>
              <p class="subtitle">With some content</p>

              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>

            </article>

          </div>

          <div class="tile is-parent is-8 is-shady">

            <article class="tile is-child notification is-white">

              <p class="title">Main column</p>
              <p class="subtitle">With some content</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>

            </article>

          </div>
        </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent is-8 is-shady">

              <article class="tile is-child notification is-white">

                <p class="title">Murphy's law</p>
                <p class="subtitle">Anything that can go wrong will go wrong</p>

                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>

              </article>

            </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">

              <p class="title">Main column</p>
              <p class="subtitle">With some content</p>

              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>

            </article>
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

import HelloWorld from '@/components/HelloWorld.vue';
import Profile from '@/components/Profile.vue';

/*
import HUMAN from '@/assets/HUMAN.png';
import NEKO from '@/assets/NEKO.png';
import YGSKN from '@/assets/YGSKN.png';
*/

//import PNGElement from '@/components/PNGElement.vue'

  /* 
    import HUMAN from '@/assets/HUMAN.svg';
    import NEKO from '@/assets/NEKO.svg';
    import YGSKN from '@/assets/YGSKN.svg';
  */


export default {
  name: 'Home',
  components: {
    HelloWorld,
    Profile,


    //PNGElement
   
    /*     
      HUMAN,
      NEKO,
      YGSKN,
    */

  }
}
</script>

<style scoped>

  .protagonist {
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: linear-gradient(to bottom, #d83473, #352384, #333447);
  }

  .words {
    color: #F3F3F5
  }

  body {
    font-family: -apple-system, 'Source Sans Pro', Meiryo, sans-serif;
    width: 100%;
    min-height: 100%;
  }

  .protagonist .hero-foot .hero-foot--wrapper {
    margin: 7px auto;
    height: 50px;
  }

  .protagonist .hero-foot .hero-foot--wrapper .hero-menu-desktop {
    line-height: 38px;
    letter-spacing: 1px;
  }

  .protagonist .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li {
    display: inline-block;
    padding-right: 15px;
    padding-left: 15px;
  }

  .protagonist .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li.is-active a {
    border-bottom: 1px solid #363636;
  }

  .protagonist .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li a {
    color: #363636;
  }

  .protagonist .hero-foot .hero-foot--wrapper .hero-menu-desktop ul li a:hover {
    color: #363636;
    transition: all .2s ease-in-out;
    border-bottom: 1px solid #363636;
  }

  .section {
    text-align: center;
  }

  h3.title span {
    border-bottom: solid 1px #363636;
  }

  h4.subtitle span {
    font-weight: bold;
  }

  svg {
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.3));
  }

  @media screen and (max-width: 768px) {
    svg {
      width: 100px;
      height: 100px;
    }
  }

  p.pre-line {
    white-space: pre-line;
  }

  .social-media {
    margin-top: 20px;
  }

  .social-media a {
    margin-right: 10px;
  }

  p.desc {
    padding-bottom: 20px;
  }

  .card-grid .column {
    display: grid;
  }

  .card-header-title {
    font-size: large;
  }

  .card-header-title .icon {
    font-weight: normal;
    margin-right: 5px;
  }

  .tag-container {
    font-weight: normal;
    margin-top: 10px;
  }

  .tag-container .tag {
    margin-left: 2px;
    margin-right: 2px;
  }

  .card-image {
    margin-bottom: 15px;
  }


</style>
