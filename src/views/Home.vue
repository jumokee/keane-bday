<template>
	<div class="home container pt-3">
		<rsvp-alert :confirm="confirm" />
		<march-section />

		<div class="main">
			<div class="row justify-content-center">
				<h1 class="text-center rumpus mt-2">Let The Wild Rumpus Start</h1>
			</div>
			<div class="row crown-row">
				<div class="col-12 wild-one">
					<h1>
						Keane's turning
						<img class="d-inline crown-img" src="../assets/img/crown.svg" />
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MarchSection from "@/components/MarchSection";
import RsvpAlert from "@/components/RsvpAlert";
export default {
	name: "home",
	components: {
		MarchSection,
		RsvpAlert
	},
	data() {
		return {
			confirm: false
		};
	}
};
</script>

<style scoped>
.crown-img {
	width: 60px;
	margin: auto;
	padding-bottom: 42px;
}
</style>
