/*
The following script can be tried in the browsers's console specially in firefox.
Till now it only works on firefox browser but it works pretty well.
*/
// Function to download all images from a webpage
async function downloadAllImages() {
    const images = document.querySelectorAll('img');
    if (images.length === 0) {
        alert('No images found on this page.');
        return;
    }
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        try {
            // Check if the image source is valid
            if (img.src) {
                const response = await fetch(img.src);
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = `image_${i}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                // Clean up the blob URL
                URL.revokeObjectURL(blobUrl);
            }
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    }
    alert(`Attempted to download ${images.length} images. Some may have been blocked by the browser.`);
}
// Create a button and add it to the page
const button = document.createElement('button');
button.textContent = 'Download All Images';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '9999';
button.style.padding = '10px';
button.style.backgroundColor = '#007BFF';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.onclick = downloadAllImages;
document.body.appendChild(button);
// Alert the user that the button has been added
alert('A "Download All Images" button has been added to the page. Click it to download all images.');
