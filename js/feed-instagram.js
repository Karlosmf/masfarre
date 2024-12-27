'use strict'

const accessToken = 'YOUR_ACCESS';
const userId = 'YOUR_USER_ID';
const numPhotos = 6;

fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('instagram-feed');
        data.data.slice(0, numPhotos).forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.media_url;
            img.alt = photo.caption || 'Instagram photo';
            container.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching Instagram feed:', error));