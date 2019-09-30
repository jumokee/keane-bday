<template>
	<div class="embed-container">
		<iframe
			width="431"
			height="431"
			src="https://www.youtube.com/embed/2B_duJTlMmM?modestbranding=1&autoplay=1"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</template>

<script>
export default {};
</script>
	<style>
.embed-container {
	position: relative;
	padding-bottom: 100%;
	height: 0;
	overflow: hidden;
	max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>