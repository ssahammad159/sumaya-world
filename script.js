/* =========================================
   SUMAYA WORLD
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================= */

    const splashScreen = document.getElementById("splash-screen");
    const authScreen = document.getElementById("auth-screen");
    const appWrapper = document.getElementById("app-wrapper");

    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");

    const navButtons = document.querySelectorAll(".nav-btn");
    const views = document.querySelectorAll(".view");

});

/* ==================================================
   CREATE PAGE FUNCTIONS
================================================== */

function createPost() {
    const text = document.getElementById("create-text");

    if (text) {
        text.focus();
    }
}

function createPhoto() {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.onchange = function () {
        showSelectedMedia(input.files[0], "image");
    };

    input.click();
}

function createVideo() {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "video/*";

    input.onchange = function () {
        showSelectedMedia(input.files[0], "video");
    };

    input.click();
}

function showSelectedMedia(file, type) {
    if (!file) {
        return;
    }

    const preview = document.getElementById("create-preview");

    if (!preview) {
        return;
    }

    preview.innerHTML = "";

    const url = URL.createObjectURL(file);

    if (type === "image") {
        const image = document.createElement("img");

        image.src = url;
        image.style.width = "100%";
        image.style.borderRadius = "16px";
        image.style.display = "block";

        preview.appendChild(image);
    }

    if (type === "video") {
        const video = document.createElement("video");

        video.src = url;
        video.controls = true;
        video.style.width = "100%";
        video.style.borderRadius = "16px";
        video.style.display = "block";

        preview.appendChild(video);
    }
}

function publishPost() {
    const text = document.getElementById("create-text");
    const preview = document.getElementById("create-preview");

    const postText = text ? text.value.trim() : "";

    if (!postText && (!preview || !preview.innerHTML.trim())) {
        alert("Please write something or select a photo/video.");
        return;
    }
    const postsContainer = document.getElementById("posts-container");

    if (postsContainer && postText) {
        const newPost = document.createElement("article");
        newPost.className = "post";

        newPost.innerHTML = `
            <div class="post-header">
                <div class="post-user">
                    <div>
                        <strong>You</strong>
                        <small>Just now</small>
                    </div>
                </div>
            </div>

            <div class="post-content">
                <p></p>
            </div>
        `;

        newPost.querySelector(".post-content p").textContent = postText;

        postsContainer.prepend(newPost);
    }
    alert("Post created successfully!");

    if (text) {
        text.value = "";
    }

    if (preview) {
        preview.innerHTML = "";
    }
}