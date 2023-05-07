import accountsService from '$lib/services/accounts.service';

export async function load() {
	const accounts = await accountsService.getAccounts();
	return {
		accounts
	};
}
