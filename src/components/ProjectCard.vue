<template>

  <div class="container">
    <div class="section">
      <div id="app" class="row columns is-multiline">
        <div class="column is-4">
          <div class="card large">

            <div class="card-image">

              <figure class="image is-16by9">

                <img src="@/assets/kouji.png">

              </figure>

            </div>

            <div class="card-content">

              <div class="media">

                <div class="media-left">

                  <figure class="image is-48x48">
                    <img src="@/assets/logo.png">
                  </figure>

                </div>

                <div class="media-content">
                  <p class="title is-4 no-padding">{{ title }}</p>
                </div>

              </div>

              <div class="content">

                {{ desc }}

              </div>

              <div class="content">

                <button class="button is-rounded is-primary">

                  <span>{{ status }}</span>

                </button>

              </div>



            </div>

          </div>
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