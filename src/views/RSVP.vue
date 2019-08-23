<template>
	<div id="rsvp" class="container">
		<h2 class="pt-3">RSVP Here</h2>
		<form @submit.prevent class="shadow text-left bg-white p-3 mx-2">
			<div class="form-group">
				<label for="email-input" class="mb-0">Email:</label>
				<input
					type="email"
					class="form-control"
					id="email-input"
					placeholder="name@example.com"
					v-model="rsvp.email"
					required
				/>
			</div>
			<div class="form-group">
				<label for="name-input" class="mb-0">Name:</label>
				<input
					type="input"
					class="form-control"
					id="name-input"
					placeholder="ex: McBroom Family"
					v-model="rsvp.name"
					required
				/>
			</div>
			<div class="form-row mx-3">
				<div class="col">
					<label class="mb-0">Attending?</label>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="true"
							:value="true"
							v-model="rsvp.attending"
							checked
						/>
						<label class="form-check-label" for="true">Yes</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="radio"
							name="false"
							:value="false"
							v-model="rsvp.attending"
						/>
						<label class="form-check-label" for="false">No</label>
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="num-of-guests"># of Guests?</label>
						<input
							type="number"
							class="form-control"
							placeholder="4"
							id="num-of-guests"
							v-model="rsvp.numberOfGuests"
							required
						/>
					</div>
				</div>
				<input v-if="rsvp.id" type="hidden" v-model="rsvp.id" />
			</div>
			<div class="text-center">
				<input
					class="btn btn-warning mt-4 animated pulse infinite delay-2s slow"
					type="submit"
					@click="submitRsvp"
					value="Submit"
				/>
			</div>
			<p class="text-center mischief pt-3 m-auto">
				<img src="../assets/img/mischief.svg" />
			</p>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			API_URL: "https://5d4732e1992ea9001444c7f9.mockapi.io/api/",
			rsvps: [],
			rsvp: {},
			confirm: false
		};
	},
	props: {
		emailAddress: String
	},
	created() {
		this.rsvp.email = this.emailAddress;
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
					console.log(rsvps);
					this.handleFilter();
				});
		},
		handleFilter() {
			this.rsvps.forEach(rsvp => {
				if (rsvp.email == this.emailAddress) {
					this.rsvp = rsvp;
					console.log(this.rsvp);
				}
			});
		},
		submitRsvp() {
			if (!this.rsvp.id) {
				this.postRsvp();
			} else {
				this.putRsvp();
			}
		},
		postRsvp() {
			console.log("post");
			fetch(this.API_URL + "/rsvps", {
				method: "POST",
				body: JSON.stringify(this.rsvp),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(this.$router.push({ name: "home", params: { confirm: true } }));
		},
		putRsvp() {
			console.log("put");
			fetch(this.API_URL + "/rsvps/" + this.rsvp.id, {
				method: "PUT",
				body: JSON.stringify(this.rsvp),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(this.$router.push({ name: "home", params: { confirm: true } }));
		}
	}
};
</script>
<style scoped>
.mischief {
	width: 40%;
}
</style>
