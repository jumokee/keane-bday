<template>
	<div v-if="confirm" class="row justify-content-center align-items-center">
		<div class="col col-sm-12 col-md-6">
			<div class="alert alert-primary text-center" role="alert">
				Your RSVP has been saved. Thank you!
				<button
					type="button"
					class="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props: {
        confirm: Boolean
    }
}
</script>