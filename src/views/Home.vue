<template>
	<div class="home container pt-3">
		<rsvp-alert :confirm="isConfirm" />

		<div class="main">
			<div class="row crown-row">
				<div class="col-12 wild-one">
					<h1 class="font-weight-bold">-Keane's a-</h1>
					<img class="d-inline crown-img animated tada delay-3s" src="../assets/img/crown.svg" />
				</div>
			</div>
			<div class="row">
				<div class="col-12 d-flex">
					<div class="card shadow p-md-3 mx-auto mt-3">
						<video-frame />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MarchSection from "@/components/MarchSection";
import RsvpAlert from "@/components/RsvpAlert";
import EmailModal from "@/components/EmailModal";
import VideoFrame from "@/components/VideoFrame";
export default {
	name: "home",
	components: {
		MarchSection,
		RsvpAlert,
		EmailModal,
		VideoFrame
	},
	computed: {
		isConfirm: function() {
			return this.$route.params.confirm;
		}
	}
};
</script>

<style scoped>
.crown-img {
	width: 80px;
	margin: auto;
}
.day-of-week {
	font-size: 1.1rem;
	font-family: "Beth Ellen", cursive;
}
.month {
	text-transform: uppercase;
	font-size: 1.2rem;
	color: #748857;
	font-weight: bold;
}
.day {
	width: 30%;
	margin: 0 auto;
	font-size: 1rem;

	font-family: "Beth Ellen", cursive;
}
.day span {
	border: 2px solid darkgray;
	border-radius: 50%;
	padding: 0 5px;
}
.time {
	letter-spacing: 3px;
}
.map-link {
	color: #748857;
}
.btn.btn-outline-dark {
	border-radius: 0;
}
.card {
	width: 100%;
	max-width: 800px;
}

@media only screen and (max-width: 375px) {
	p {
		font-size: 0.8rem;
	}
	.address-1,
	.address-2 {
		font-size: 0.7rem;
	}
}
</style>
