function init() {
    const inputBox = document.getElementById('prompt-textarea')
    
    const iframe = document.createElement('iframe');
    iframe.id = 'imageBox'
    iframe.alt = 'If you search, images will appear here.'

    document.getElementsByTagName('main')[0].append(iframe)

    inputBox.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { // Enter key
            const inputValue = event.target.value; // Get the input value
            iframe.src = `https://bing.com/images/search?q=${encodeURIComponent(inputValue)}&view=detailV2&selectedindex=0&vt=1`
          }
      });
}

// Execute the contentScript function when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}