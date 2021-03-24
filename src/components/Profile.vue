
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
							<p>1986年3月生まれの魚座。2010年、関西学院大学（総合政策学部総合政策学科）を卒業。地元福岡にて派遣から始めた電話営業の職を正社員（専任職）登用に到るまで勤めるも2019年5月末退職。退職後はWebエンジニア/デザイナーを目指し、就労移行支援事業所などを利用しながら自学自習でコードを学ぶ。Vue.js (Bulma,Vuetify) / JavaScript / Ruby (Rails)
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
							<h4>ヤギナサカ【山羊魚マン】</h4>
							<p>（※現在準備中：2021年4月配信活動開始予定）<br>ゲーム実況者・怪人系バーチャルゲーマー。山羊的な容貌を備えているが実体は魚のキメラ。ゲームの腕前は割と『雑魚』レベル。AfterEffect・Premiere Pro等を駆使し、丁寧な作りの動画コンテンツ制作及び配信に努めていく計画を構想中。好みのゲームジャンルは雑食系。使用コンソール：PC(Windows)/Nintendo Switch/Playstation 3/Retrofreak</p>
							
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
							<h4>unomicha1（ゆのみ）</h4>
							<p>もう一つの夢：インディーゲームクリエイターになることを目指している逸脱人。目標は人々の記憶に残るタイトル/作品をリリースし、多くの心を揺り動かすこと。開発環境はWin及びMac。使用エンジンは主にUnity、その他にGameMaker Studio 2、Godot Engine、Pixel GameMaker MVなど。
							2D (pixel Art) のスタイルを特に好む。せめてドット絵ぐらいは自分の手で描けるようになるべく修行中。</p>

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
