

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('.comment-form form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle comment submission (e.g., send to server)
            console.log('Comment submitted');
        });
    }

    // Example: Handle comment sorting
    const sortOptions = document.querySelector('.sort-options button');
    if (sortOptions) {
        sortOptions.addEventListener('click', function() {
            // Handle sorting (e.g., by date or popularity)
            console.log('Sorting comments');
        });
    }
    // Static data for related videos
    const relatedVideos = [
        { "id": "2", "title": "Video 2", "thumbnail": "assets/img1.png", "url": "/video/2" },
        { "id": "3", "title": "Video 3", "thumbnail": "assets/img2.jpg", "url": "/video/3" },
        { "id": "4", "title": "Video 4", "thumbnail": "assets/img3.jpg", "url": "/video/4" },
        { "id": "5", "title": "Video 5", "thumbnail": "assets/img4.jpg", "url": "/video/5" }
    ];

    const relatedVideosContainer = document.getElementById('related-videos-container');

    if (relatedVideosContainer) {
        relatedVideosContainer.innerHTML = relatedVideos.map(video => `
            <div class="col-md-3 mb-3">
                <a href="${video.url}">
                    <img src="${video.thumbnail}" alt="${video.title}" class="img-fluid">
                    <p>${video.title}</p>
                </a>
            </div>
        `).join('');
    }
});
