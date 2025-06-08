<script>
    export let blogs = [
        {
            id: 1,
            title: "June Newsletter",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/static/assets/article.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "July Newsletter",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/static/assets/article.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "Fuck knows",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/static/assets/article.jpg",
            link: "#"
        },
        {
            id: 4,
            title: "August Newsletter",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/static/assets/article.jpg",
            link: "#"
        },
        {
            id: 5,
            title: "Fuck knows",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "/static/assets/article.jpg",
            link: "#"
        },
        // Add more blog items as needed
    ];
</script>

<section class="blogs-section">
    <h2 class="section-title">Blogs & Articles</h2>

    <div class="blogs-container">
        {#each blogs as blog}
            <article class="blog-item">
                <img src={blog.image} alt={blog.title} class="blog-image" />
                <div class="blog-content">
                    <h3 class="blog-title">{blog.title}</h3>
                    <p class="blog-excerpt">{blog.excerpt}</p>
                    <a href={blog.link} class="read-more">Read More →</a>
                </div>
            </article>
        {/each}
    </div>
</section>

<style>
    .blogs-section {
        padding: 80px 80px;
        background: var(--background);
    }

    .section-title {
        color: var(--primary);
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .blogs-container {
        display: flex;
        overflow-x: auto;
        gap: 2rem;
        padding-bottom: 1rem;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: var(--secondary) var(--background);
    }
    /* For WebKit browsers (Chrome, Safari, Edge) */
    .blogs-container::-webkit-scrollbar {
        height: 6px; /* Thinner scrollbar */
        background: transparent;
    }

    .blogs-container::-webkit-scrollbar-track {
        background: var(--background);
        border-radius: 3px;
    }

    .blogs-container::-webkit-scrollbar-thumb {
        background: var(--secondary);
        border-radius: 3px;
        opacity: 0.7;
    }

    .blogs-container::-webkit-scrollbar-thumb:hover {
        background: var(--accent);
        opacity: 1;
    }

    /* Optional: Hide scrollbar on touch devices (not always reliable) */
    @media (hover: none) {
        .blogs-container::-webkit-scrollbar {
            display: none;
        }
        .blogs-container {
            scrollbar-width: none; /* For Firefox */
            -ms-overflow-style: none; /* For Edge */
        }
    }

    .blog-item {
        flex: 0 0 300px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        scroll-snap-align: start;
        transition: transform 0.2s;
    }

    .blog-item:hover {
        transform: translateY(-5px);
    }

    .blog-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        filter: blur(2px);
        border-radius: 12px 12px 0 0;
    }

    .blog-content {
        padding: 1.5rem;
    }

    .blog-title {
        color: var(--primary);
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
    }

    .blog-excerpt {
        color: var(--text);
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }

    .read-more {
        color: var(--accent);
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    /* Scrollbar Styling */
    .blogs-container::-webkit-scrollbar {
        height: 8px;
    }

    .blogs-container::-webkit-scrollbar-track {
        background: var(--background);
    }

    .blogs-container::-webkit-scrollbar-thumb {
        background: var(--secondary);
        border-radius: 4px;
    }

    @media (min-width: 768px) {
        .blog-item {
            flex: 0 0 400px;
        }

        .blog-image {
            height: 250px;
        }
    }
</style>
