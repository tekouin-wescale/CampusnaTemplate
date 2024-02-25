document.addEventListener("DOMContentLoaded", function() {
    fetch("blogs.json")
        .then(response => response.json())
        .then(data => {
            const blogPosts = document.getElementById("blog-posts");
            const blogs = data.blogs;

            // Loop through each blog post and create HTML elements
            blogs.forEach(blog => {
                const postItem = document.createElement("div");
                postItem.classList.add("col-lg-6");
                postItem.innerHTML = `
                    <div class="post-item-1" data-id="${blog.id}">
                        <img src="${blog.image}" alt="">
                        <div class="b-post-details">
                            <div class="bp-meta">
                                <a href="#"><i class="icon_clock_alt"></i>${blog.date}</a>
                            </div>
                            <h3><a href="#">${blog.title}</a></h3>
                            <a class="read-more" href="#">Read More<i class="arrow_right"></i></a>
                        </div>
                    </div>
                `;
                blogPosts.appendChild(postItem);
            });

            // Add event listener to handle clicks on blog posts
            const postItems = document.querySelectorAll(".post-item-1");
            postItems.forEach(item => {
                item.addEventListener("click", function(event) {
                    event.preventDefault();
                    const blogId = this.getAttribute("data-id");
                    const selectedBlog = blogs.find(blog => blog.id == blogId);
                    if (selectedBlog) {
                        // Redirect to single-post.html page with the selected blog's ID
                        window.location.href = `single-post.html?id=${selectedBlog.id}`;
                    }
                });
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
