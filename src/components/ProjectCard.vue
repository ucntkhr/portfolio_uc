<template>


  <div class="column is-4">
    <div class="card large">

      <div class="card-image">

        <figure class="image is-16by9">
          <a :href="url">
            <img v-bind:src="imgPath">
          </a>
        </figure>   

      </div>

      <div class="card-content">

        <div class="media">

          <!--           
            <div class="media-left">

              <figure class="image is-48x48">
                <img src="@/assets/logo.png">
              </figure>

            </div>
          -->

          <div class="media-content">
            <p class="title is-4 no-padding">{{ title }}</p>
          </div>

        </div>

        <div class="content">

          {{ desc }}

        </div>

        <div class="content">

          <button v-bind:class="stat_color" class="button is-rounded">

            <span>{{ status }}</span>

          </button>

        </div>



      </div>

    </div>
  </div>


</template>

<script>

  export default {
    name: "ProjectCard",

    props: {

      title: String,

      project_id: String,

      desc: String,

      status: String,

      cardview: {
        type: String,
        default: '@/assets/Sky.jpg'
      },

      stat_color: {
        type: String,
        default: 'is-primary'
      },


      url: String,

    },

    data(){
      return {
        imgPath: require(`@/assets/project_${this.project_id}.png`)
      }
    },

  }

</script>

<style scoped>

.card {
  overflow: hidden;
  background: ghostwhite;
  color: var(--bg);
}

.card.large {
  border-radius: 5px;
}

.title.no-padding {
  margin-bottom: 0 !important;
  overflow: hidden;
}

.footer {
  background: var(--card-bg);
  color: ghostwhite;
}

.footer p,
strong {
  color: ghostwhite
}

.footer a:hover {
  color: crimson;
}

.fa {
  color: ghostwhite;
  margin: 10px
}


</style>