document.getElementById('file-input').addEventListener('change', function(event) {
    const videoPreview = document.getElementById('video-preview');
    videoPreview.innerHTML = ''; // Clear previous previews

    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const videoUrl = URL.createObjectURL(file);
        
        const videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.controls = true;

        videoPreview.appendChild(videoElement);
    }
});
