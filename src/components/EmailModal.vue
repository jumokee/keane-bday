<template>
	<div id="email-modal">
		<div
			class="modal fade"
			id="emailModal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="email-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="modal-title" id="email-modal-label">Enter your Email</h3>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body">
						<form id="email-form">
							<label for="email">
								<h4>Start a New or Modify an Existing RSVP</h4>
							</label>
							<input
								type="email"
								class="mb-2"
								id="email"
								name="email"
								v-model="email"
								placeholder="Email Address"
							/>

							<div class="modal-footer">
								<router-link
									:to="{ name: 'rsvp', params: {emailAddress: email} }"
									tag="button"
									type="submit"
									class="btn btn-primary"
									data-dismiss="modal"
								>Continue</router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: ""
		};
	}
};
</script>
<style scoped>
</style>