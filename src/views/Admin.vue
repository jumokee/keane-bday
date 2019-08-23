<template>
	<div id="admin" class="container-fluid">
		<h1>RSVP List</h1>
		<router-link :to="{name: 'home'}">Home</router-link>
		<div>
			<h4>Total Guest Count: {{this.totalGuests()}}</h4>
		</div>
		<div class="row border-bottom">
			<div class="col col-3">
				<p>Name</p>
			</div>
			<div class="col col-5">
				<p>Email</p>
			</div>
			<div class="col col-2">
				<p>#</p>
			</div>
			<div class="col col-2">
				<p>Y/n?</p>
			</div>
		</div>
		<div v-for="rsvp in rsvps" :key="rsvp.id">
			<div
				class="row border-bottom py-1 align-items-center"
				:class="{ 'bg-secondary text-white': !rsvp.attending }"
			>
				<div class="col col-3">
					<p>{{rsvp.name}}</p>
				</div>
				<div class="col col-5">
					<p>{{rsvp.email}}</p>
				</div>
				<div class="col col-2">
					<p>{{rsvp.numberOfGuests}}</p>
				</div>
				<div class="col col-2">
					<p>{{rsvp.attending}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			API_URL: "https://5d4732e1992ea9001444c7f9.mockapi.io/api/",
			rsvps: {}
		};
	},
	methods: {
		fetchAllRsvps() {
			fetch(this.API_URL + "/rsvps")
				.then(response => {
					return response.json();
				})
				.then(rsvps => {
					this.rsvps = rsvps;
				});
		},
		totalGuests() {
			let count = 0;
			this.rsvps.forEach(rsvp => {
				if (rsvp.attending) count = count + parseInt(rsvp.numberOfGuests);
			});
			return count;
		}
	},
	created() {
		this.fetchAllRsvps();
	}
};
</script>

<style scoped>
p {
	font-size: 0.8rem;
	margin-bottom: 0;
}
</style>