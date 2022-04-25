<article>
	<header>
		<h1>Sanity + SvelteKit</h1>
	</header>
	<main>
		<h2>Pets</h2>
		{#if pets && pets.length}
		<ul>
			{#each pets as pet}
			<li>{pet.name}</li>
			{/each}
		</ul>
		{:else}
		<p>No pets to show</p>
		{/if}
		<div>
			<div>¯\_(ツ)_/¯</div>
			<p>
				Your data will show up here when you've configured everything
				correctly
			</p>
		</div>
	</main>
</article>

<script>
  let pets = [
    /* {
          _createdAt: "2022-03-08T09:28:00Z",
          _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
          _rev: "xnBg0xhUDzo561jnWODd5e",
          _type: "pet",
          _updatedAt: "2022-03-08T09:28:00Z",
          name: "Bamse"
        } */
  ];
</script>

