document.addEventListener('DOMContentLoaded', () => {
    const featureLinkElements = document.querySelectorAll('.feature__link');
    const featureSubElements = document.querySelectorAll('.feature-sub');
    featureLinkElements.forEach( (button, index) => {
        button.addEventListener('click', () => {

            featureSubElements.forEach( (featureSubElement) => {
                featureSubElement.classList.add('hidden');
            });            
            
            featureLinkElements.forEach( (featureLinkElement) => {
                featureLinkElement.classList.remove('feature__link_active');
            });
            
            featureSubElements[index].classList.remove('hidden');
            featureLinkElements[index].classList.add('feature__link_active');
        });
    });
});