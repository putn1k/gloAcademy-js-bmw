const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]');
const tabsFields = document.querySelectorAll('[data-tabs-field]');
const tabsTitles = document.querySelectorAll('[data-tabs-title]');

for (const tab of tabsHandlerElements) {
    tab.addEventListener( 'click', () => {
        tabsHandlerElements.forEach( item => {
            if (tab === item) {
                item.classList.add('design-list__item_active');
            } else {
                 item.classList.remove('design-list__item_active');
            }
        });
        tabsFields.forEach( item => {
            if( item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        tabsTitles.forEach( item => {
            if( item.dataset.tabsTitle === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}