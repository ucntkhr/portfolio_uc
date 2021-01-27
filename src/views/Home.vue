<template>

  <div class="home">
    <section class="protagonist hero is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="words title is-light">
            【 <span class="fas fa-rocket"></span> Under Construction Heroes <span class="fas fa-robot"></span> 】
          </h1>
          <p class="words subtitle">
            ucntkhr's Portfolio ( Made with Vue.js / Bulma )
          </p>
        </div>
      </div> 
      <div class="hero-foot is-hidden-mobile has-background-white">
        <div class="hero-foot--wrapper">
          <div class="columns">
            <div class="column is-12 hero-menu-desktop has-text-centered">
              <ul>
                <li><a href="#home">Home</a></li> 
                <li><a href="#profile">Profiles</a></li> 
                <li><a href="#skill">Skillset</a></li> 
                <li><a href="#project">Projects</a></li> 
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 
    <section class="sans-river hero is-bold is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="words hell-words title is-light">
            【 <span class="fas fa-skull"></span> ーーーーー Sans River ーーーーー <span class="fas fa-burn"></span> 】
          </h1>
          <p class="hell-words subtitle">
            "SHOULD BE BURNING IN HELL."
          </p>

        </div>
      </div> 

    </section>
    -->

    <Profiles id="Profile" />

    <section class="container">
      <div class="column m-5 cheep-invisi">
        <p>【＊MY NAME IS SPACE LITTLE SPACER＊】</p>
      </div>
    </section>

    <Skillset />

    <Projects />

    <Contact />

    <section class="container">
      <div class="column m-5 cheep-invisi">
        <p>【＊SPACE LITTLE SPACER CAME BACK＊】</p>
      </div>
    </section>

    <Appendix />

    <section class="container">
      <div class="column m-5 cheep-invisi">
        <p>【＊SPACE, SPACER NEVER CHANGES＊】</p>
      </div>
    </section>


    <footer class="footer has-background-grey-darker">
      <div class="content has-text-centered">
        <p class="has-text-grey-lighter">Copyright © 2021 ucntkhr All Rights Reserved.</p>
        <a class="icon has-text-grey-lighter" target="”_blank”" href="https://github.com/ucntkhr/portfolio_uc">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>

  </div>

</template>

<script>
// @ is an alias to /src

import Profiles from '@/components/Profile.vue';
import Appendix from '@/components/Appendix.vue';
import Projects from '@/components/Project.vue';
import Skillset from '@/components/Skillset.vue';
import Contact from '@/components/Contact.vue';

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
    Profiles,
    Appendix,
    Projects,
    Skillset,
    Contact


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

  .sans-river {
    background: linear-gradient(-120DEG, #D62121, #C72C2C, #3A1111)
  }

  .hell-words {
    font-family:'Comic Sans MS';
    color: #F3F3F5
  }

  .cheep-invisi {
    color: #FFFFFF
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
