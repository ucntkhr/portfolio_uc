
<template>

	<section class="container">

		<div class="intro column is-8 is-offset-2">
			<h2 class="title">PROFILES</h2>
			<p class="subtitle">Here are 3 <strong>Avaters</strong> of me.</p>
		</div>


		<div class="columns features">

			<div class="column is-4">
				<div class="card is-shady">

					<div class="card-image has-text-centered">
						<img class="mt-5" src="@/assets/NEKO.png">

						<br>

						<i class="fa fa-paw"></i>
						<a href="#">
							NEKO
						</a>
						<i class="fa fa-paw"></i>

					</div>

					<div class="card-content">

						<div class="content">
							<h4>ucntkhr</h4>
							<p> Webエンジニア/デザイナーを一時期志望していました。
							<br>発達障害当事者（ADHD)</p>

							<p class="is-align-center">
								<a href="https://github.com/ucntkhr">
									<button class="button is-dark is-rounded">

										<span class="icon">
											<i class="fab fa-github"></i>
										</span>
										<span>GitHub</span>

									</button>
								</a>
							</p>

							<p><a href="#">Learn more</a></p>

						</div>

					</div>

				</div>
			</div>

			<div class="column is-4">
				<div class="card is-shady">
					<div class="card-image has-text-centered">
						<img class="mt-5" src="@/assets/YGSKN.png">

						<br>

						<i class="fa fa-empire"></i>
						<a href="#">             
							YGSKN 
						</a>
						<i class="fa fa-empire"></i>

					</div>

					<div class="card-content">
						<div class="content">
							<h4>山羊魚</h4>
							<p>ゲーム配信者になってみたいと思っていた時期もありました。</p>
							
							<p class="is-align-center">
								<a href="#">
									<button class="button is-danger is-rounded">

										<span class="icon">
											<i class="fab fa-youtube"></i>
										</span>
										<span>Youtube</span>

									</button>
								</a>
							</p>

							<p><a href="#">Learn more</a></p>
						</div>
					</div>
				</div>
			</div>

			<div class="column is-4">
				<div class="card is-shady">
					<div class="card-image has-text-centered">
						<img class="mt-5" src="@/assets/HUMAN.png">

						<br>

						<i class="fa fa-apple"></i>
						<a href="#">
							HUMAN 
						</a>
						<i class="fa fa-apple"></i>

					</div>

					<div class="card-content">
						<div class="content">
							<h4>Unomicha1</h4>
							<p>カウンセリング治療を受けています。</p>

							<p class="is-align-center">
								<a href="#">
									<button class="button is-info is-rounded">

										<span class="icon">
											<i class="fab fa-twitter"></i>
										</span>
										<span>Twitter</span>

									</button>
								</a>
							</p>

							<p><a href="#">Learn more</a></p>
						</div>
					</div>
				</div>
			</div>

		</div>

	</section>


</template>


<script>

	export default {
		name: 'Profile',
		props: {
			msg: String
		}


	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
	margin-top: 10px
}

.hiding {
	display: none;
}


</style>
