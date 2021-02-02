<template>

	<section id="project" class="section has-background-white-ter">

		<div class="intro column is-8 is-offset-2">

			<h2 class="title">PROJECTS</h2>
			<p class="subtitle">Here are my <strong>WORKS</strong> , still <strong>"IN PROGRESS"</strong>.</p>

		</div>

		<div id="app" class="row columns is-multiline">
			<ProjectCard v-for="ProjectData in ProjectDatas"  v-bind:key="ProjectData.Project_id" v-bind="ProjectData"/>
		</div>

	</section>

</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectData from '@/ProjectData.json';

export default {

	name: "Project",

	components: {

		ProjectCard,

	},


	data() {
		return {
			fontSize: '',
			ProjectDatas: ProjectData


		}
		
	},


  created() {
    if (this.icon !== 'fas fa-code') {
      this.fontSize = 'font-size: x-large'
    }
  }

}

</script>