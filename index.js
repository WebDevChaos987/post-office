const timeline = document.getElementById('timeline');
const postInput = document.querySelector('textarea');
const submitBtn = document.getElementById('submit-post');

// Simulated Database
let posts = [
    {
        user: "Architect",
        handle: "@system_root",
        content: "Just deployed the Post Office social shell. No F-Droid allowed.",
        timestamp: "2m",
        stamps: 42
    },
    {
        user: "LenovoUser",
        handle: "@win_admin",
        content: "Testing Hydra on my local IP. The logs are going crazy!",
        timestamp: "15m",
        stamps: 5
    }
];

function renderPosts() {
    timeline.innerHTML = posts.map(post => `
        <div class="post-card">
            <div class="post-meta">
                <img src="https://via.placeholder.com/50" class="avatar">
                <div>
                    <span class="post-user">${post.user}</span>
                    <span class="post-handle">${post.handle} • ${post.timestamp}</span>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions" style="margin-top:15px; color:#8b949e;">
                <i class="fa-regular fa-comment"></i> <span style="margin-right:20px">0</span>
                <i class="fa-solid fa-stamp"></i> <span>${post.stamps}</span>
            </div>
        </div>
    `).join('');
}

submitBtn.addEventListener('click', () => {
    if (postInput.value.trim() !== "") {
        const newPost = {
            user: "Guest User",
            handle: "@anon",
            content: postInput.value,
            timestamp: "Now",
            stamps: 0
        };
        posts.unshift(newPost); // Add to top
        postInput.value = "";
        renderPosts();
    }
});

renderPosts();
