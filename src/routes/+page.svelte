<script>
	export let data;
	const rubFormat = Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' });
</script>

<div class="p-4 grid gap-4 max-w-screen-xl m-auto">
	{#each data.accounts as account (account._id)}
		<div class="p-2 border-r-2 shadow-md shadow-slate-80">
			<h1>{account.name}</h1>
			<div>
				Balance: <span
					class={account.balance === 0
						? 'text-slate-500'
						: account.balance > 0
						? 'text-green-500'
						: 'text-red-500'}>{rubFormat.format(account.balance)}</span
				>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	:global(html) {
		background-color: theme('colors.slate.100');
	}
	:global(*) {
		color: theme('colors.slate.800');
	}
</style>
