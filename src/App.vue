<template>
	<div id="app">
		<div class="container">
			<march-section />
			<router-view />
		</div>
	</div>
</template>

<script>
import MarchSection from "@/components/MarchSection";
export default {
	components: {
		MarchSection
	}
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Amatic SC", cursive;
}

p,
span {
	font-family: "Oswald", sans-serif;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-image: url("assets/img/handmadepaper.png");
	height: 1300px;
}
</style>
