<template>
	<section class="container">

		<div class="notification is-info">
			<h1 class="title is-bold is-large m-5">
				APPENDIX
			</h1>

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
		</div>
	</section>
</template>

<script>

	export default {
		name: 'Appendix',
		props: {
			msg: String
		}
	}

</script>