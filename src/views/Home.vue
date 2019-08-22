<template>
	<div class="home container pt-3">
		<rsvp-alert :confirm="isConfirm" />
		<march-section />

		<div class="main">
			<div class="row justify-content-center">
				<h1 class="text-center rumpus mt-4 font-weight-bold">Let The Wild Rumpus Start!</h1>
			</div>
			<div class="row crown-row">
				<div class="col-12 wild-one">
					<h1 class="font-weight-bold">-Keane's turning a-</h1>
					<img class="d-inline crown-img animated tada delay-3s" src="../assets/img/crown.svg" />
				</div>
			</div>
			<div class="card mt-3 mx-md-5">
				<div class="card-body">
					<h3 class="card-title">Please Join Us To Celebrate</h3>
					<div class="card-text">
						<div class="row mt-4">
							<div class="col col-6 d-flex flex-column justify-content-center">
								<p class="day-of-week mb-0">Saturday</p>
								<p class="month mb-0">September</p>
								<p class="day mb-0">
									<span>28</span>
								</p>
							</div>
							<div class="col col-6 d-flex flex-column justify-content-center border-left border-dark">
								<p class="time mb-0">AT 4PM</p>
								<a
									class="map-link"
									href="https://www.google.com/maps/place/2139+Summit+Row+Blvd,+Powell,+OH+43065/@40.134006,-83.0756985,17z/data=!3m1!4b1!4m5!3m4!1s0x8838f2849ef736cb:0x2ab28424b6733fff!8m2!3d40.134006!4d-83.0735098"
								>
									<p class="place font-weight-bold mb-0">MCBROOM RESIDENCE</p>

									<p class="address-1 mb-0">2139 SUMMIT ROW BLVD</p>
									<p class="address-2 mb-0">POWELL, OH 43065</p>
								</a>
							</div>
						</div>
						<button
							type="button"
							class="btn btn-warning mt-4 animated pulse infinite delay-2s slow"
							data-toggle="modal"
							data-target="#emailModal"
						>RSVP HERE</button>
					</div>
					<email-modal></email-modal>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MarchSection from "@/components/MarchSection";
import RsvpAlert from "@/components/RsvpAlert";
import EmailModal from "@/components/EmailModal";
export default {
	name: "home",
	components: {
		MarchSection,
		RsvpAlert,
		EmailModal
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
