<template>
	<div id="rsvp" class="container">
		<h2 class="pt-3">RSVP Here</h2>
		<form class="text-left">
			<div class="form-group">
				<label for="email-input">Email:</label>
				<input
					type="email"
					class="form-control"
					id="email-input"
					placeholder="name@example.com"
					v-model="rsvp.email"
				/>
			</div>
			<div class="form-group">
				<label for="name-input">Name:</label>
				<input
					type="input"
					class="form-control"
					id="name-input"
					placeholder="McBroom Family"
					v-model="rsvp.name"
				/>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label for="is-attending">Attending?</label>
					<select v-model="attending" class="form-control" id="is-attending">
						<option value="true" selected>Yes</option>
						<option value="false">No</option>
					</select>
				</div>
			</div>
		</form>
		<p class="text-center mischief m-auto">
			<img src="../assets/img/mischief.svg" />
		</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			API_URL: "https://5d4732e1992ea9001444c7f9.mockapi.io/api/",
			rsvps: [],
			rsvp: {}
		};
	},
	props: {
		emailAddress: String
	},
	created() {
		this.fetchAllRsvps();
	},
	methods: {
		fetchAllRsvps() {
			fetch(this.API_URL + "/rsvps")
				.then(response => {
					return response.json();
				})
				.then(rsvps => {
					this.rsvps = rsvps;
					this.handleFilter();
				});
		},
		handleFilter() {
			this.rsvps.forEach(rsvp => {
				if (rsvp.email == this.emailAddress) {
					this.rsvp = rsvp;
				}
			});
		}
	}
};
</script>
<style scoped>
.mischief {
	width: 30%;
}
</style>
