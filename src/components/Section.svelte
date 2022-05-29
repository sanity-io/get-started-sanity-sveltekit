<script>

	export let 
		name,
		backgroundColor = 'light',
		showName = false,
		centerText = false;
</script>

<div class={`container-fluid p-3 ems-section-${backgroundColor} ${showName && centerText ? 'center-text' : ''}`}>
	<div class='container mb-4'>
		{#if showName} 
			<h2 class="p-3 ">{name}</h2>
		{/if}
		<slot></slot>
	</div>
</div>

<style>
	.container {
		min-height: 500px;
	}
	.center-text {
		text-align: center;
	}
	.ems-section-dark {
		background-color: black;
		color: white;
	}

	.ems-section-light {
		background-color: lightgray;
		color: black;
	}
</style>