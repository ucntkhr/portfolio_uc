<template>

	<section id="skill" class="section has-background-grey-lighter">

		<div class="intro column is-8 is-offset-2">
			<h2 class="title">SKILLSET</h2>
			<p class="subtitle">身につけたいもの</p>
		</div>


		<div class="container card-grid">

			<h4 class="subtitle is-5 has-text-grey-darker">
				<strong>Web development</strong>
			</h4>

			<div class="columns is-desktop is-multiline is-centered">
				<Skillcard v-for="skill in skills.web" v-bind:key="skill.id" v-bind="skill"/>
			</div>

			<h4 class="subtitle is-5 has-text-grey-darker">
				<strong>Video compilation</strong>
			</h4>

			<div class="columns is-desktop is-multiline is-centered">
				<Skillcard v-for="skill in skills.vid" v-bind:key="skill.id" v-bind="skill"/>
			</div>

			<h4 class="subtitle is-5 has-text-grey-darker">
				<strong>Game development</strong>
			</h4>

			<div class="columns is-desktop is-multiline is-centered">
				<Skillcard v-for="skill in skills.game" v-bind:key="skill.id" v-bind="skill"/>
			</div>

		</div>


	</section>

</template>

<script>
import Skillcard from '@/components/Skillcard.vue';

export default {

	name: "Skillset",

	components: {

		Skillcard,

	},

	data() {
		return {
			fontSize: '',

			skills: {
				web: [
					{
						name: 'JavaScript',
						icon: 'fab fa-js-square',
						desc: `直で使うことはあまりないです`
					},
					{
						name: 'Vue.js',
						icon: 'devicons devicon-vuejs-plain',
						desc: `便利です`
					},
					{
						name: 'Ruby',
						icon: 'devicons devicon-ruby-plain',
						desc: `資格が取れる位になりたい`
					},
					{
						name: 'Rails',
						icon: 'devicons devicon-rails-plain',
						desc: `データベースとかについても少し過去に学習しました`
					},
					{
						name: 'HTML',
						icon: 'fab fa-html5',
						desc: `復習しないといけないと最近思っています`
					},
					{
						name: 'CSS',
						icon: 'fab fa-css3-alt',
						desc: `色をつけたりするのが好き`
					},
					{
						name: 'typescript',
						icon: 'devicons devicon-typescript-plain',
						desc: `なんとなく勉強してみたい`
					},
					{
						name: 'React',
						icon: 'devicons devicon-react-plain',
						desc: `アプリとかも作ってみたいです`
					},
				],

				vid: [
					{
						name: 'Photoshop',
						icon: 'devicons devicon-photoshop-plain',
						desc: `色々描いたり編集したりする`
					},

					{
						name: 'AfterEffect',
						icon: 'devicons devicon-aftereffects-plain',
						desc: `一番学んでみたいAdobe製品 `
					},
					{
						name: 'Premiere Pro',
						icon: 'devicons devicon-premierepro-plain',
						desc: `動画編集の一つくらい自力で出来るようになりたい`
					},

				],

				game: [
					{
						name: 'Unity',
						icon: 'fab fa-unity',
						desc: `もっと詳しくなりたい。すぐVersionが上がるのが困る`
					},
					{
						name: 'GameMaker Studio',
						icon: 'fas fa-gamepad',
						desc: `ライセンスを購入しているので活用したいです`
					},
					{
						name: 'Godot Engine',
						icon: 'fas fa-robot',
						desc: `PythonとかRustとかも使えるらしいとのこと`
					}
				]
			}
		}
	},


  created() {
    if (this.icon !== 'fas fa-code') {
      this.fontSize = 'font-size: x-large'
    }
  }

}

</script>