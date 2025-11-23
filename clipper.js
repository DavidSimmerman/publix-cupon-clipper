const listContainer = document.querySelector('.savings-content.search-results-section');
let clickTimeout;

function forceClick(button) {
	['mouseenter', 'mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventType => {
		button.dispatchEvent(
			new MouseEvent(eventType, {
				view: window,
				bubbles: true,
				cancelable: true
			})
		);
	});
}

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickAllCoupons() {
	clearTimeout(clickTimeout);
	clickTimeout = setTimeout(async () => {
		const buttons = document.querySelectorAll('button.p-coupon-button:not(.p-coupon-button--selected)');
		console.log(`Found ${buttons.length} coupons to click`);

		for (const button of buttons) {
			forceClick(button);
			await delay(350);
		}

		console.log('Finished clicking all coupons');
	}, 3000);
}

function clickLoadMore() {
	const loadMoreBtn = listContainer.querySelector('button[data-qa-automation="button-Load more"]');
	if (loadMoreBtn) {
		forceClick(loadMoreBtn);
		return true;
	}
	return false;
}

function start() {
	const mo = new MutationObserver(() => {
		if (clickLoadMore()) return;
		clickAllCoupons();
	});

	mo.observe(listContainer, { childList: true, subtree: true });
	clickLoadMore();
}

if (document.readyState === 'complete') {
	start();
} else {
	document.addEventListener('readystatechange', start);
}
