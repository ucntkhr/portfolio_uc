<template>

	<section id="skill" class="section has-background-grey-lighter">

		<div class="intro column is-8 is-offset-2">
			<h2 class="title">SKILLSET</h2>
			<p class="subtitle">Here are my special <strong>"PERKS"</strong>.</p>
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
						desc: `フレームワークで扱うことが多いです。このポートフォリオではVue.jsを使用しています`
					},
					{
						name: 'Vue.js',
						icon: 'devicons devicon-vuejs-plain',
						desc: `Web制作に便利なフレームワークは積極的に活用していきたいと考えています`
					},
					{
						name: 'Ruby',
						icon: 'devicons devicon-ruby-plain',
						desc: `現在学習中：Ruby技術者認定試験の受験を検討しています（まずSilverを目標に）`
					},
					{
						name: 'Rails',
						icon: 'devicons devicon-rails-plain',
						desc: `Railsを使用したバックエンド実装についても少し過去に学習しています`
					},
					{
						name: 'HTML',
						icon: 'fab fa-html5',
						desc: `最初期はHTML/CSSのみのシンプルなページを制作していました`
					},
					{
						name: 'CSS',
						icon: 'fab fa-css3-alt',
						desc: `このポートフォリオではBulmaというCSSフレームワークを使用しています`
					},
					{
						name: 'typescript',
						icon: 'devicons devicon-typescript-plain',
						desc: `今後学んでいきたいと考えている言語の一つです`
					},
					{
						name: 'React',
						icon: 'devicons devicon-react-plain',
						desc: `iOS向けのアプリ制作にも挑戦したいと考えています`
					},
				],

				vid: [
					{
						name: 'Photoshop',
						icon: 'devicons devicon-photoshop-plain',
						desc: `動画のサムネイル作成などに使用します（勿論Web制作にも使用しています）`
					},

					{
						name: 'AfterEffect',
						icon: 'devicons devicon-aftereffects-plain',
						desc: `現在学習中：動画のVFXやアニメーションの追加などに使用します`
					},
					{
						name: 'Premiere Pro',
						icon: 'devicons devicon-premierepro-plain',
						desc: `現在学習中：動画のトランジション（つなぎ）や書き出しなどの編集に使用します`
					},

				],

				game: [
					{
						name: 'Unity',
						icon: 'fab fa-unity',
						desc: `主にこちらを使用してゲーム制作に挑戦していきたいと考えています。リファレンスが豊富`
					},
					{
						name: 'GameMaker Studio',
						icon: 'fas fa-gamepad',
						desc: `初めてサンプルを制作したゲームエンジンです。現在はGMS2を使用しています`
					},
					{
						name: 'Godot Engine',
						icon: 'fas fa-robot',
						desc: `Pythonや、工夫次第でRustも使える軽量のエンジンとのことです（興味があります）`
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