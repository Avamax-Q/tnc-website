<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

    const members = [
        {
            id: 1,
            name: "Hamsini Raj",
            role: "Chairperson",
            image: "/static/assets/board/board-1.png",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
            id: 2,
            name: "Tarun Idk Bros Last Name",
            role: "Secretary",
            image: "/static/assets/board/board-2.png",
            bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            id: 3,
            name: "Samita Sri CJ",
            role: "Vice Chairperson",
            image: "/static/assets/board/board-3.png",
            bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            id: 4,
            name: "Darsh Shah",
            role: "Co - Secretary",
            image: "/static/assets/board/board-4.png",
            bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        // Add more members following the same structure...
    ];

    onMount(() => {
        gsap.utils.toArray(".member-section").forEach((section, i) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    });
</script>

<nav class="navbar">
    <a href="/" class="logo-link">
        <img src="/static/assets/tnc-logo.png" alt="TNC Logo" class="nav-logo" />
    </a>
    <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/gallery" class="nav-link">Gallery</a>
    </div>
</nav>

<main class="board-depth">
    <h1 class="page-title">Meet Our Board</h1>

    {#each members as member, i}
        <section class="member-section {i % 2 ? 'reverse' : ''}">
            <div class="image-container">
                <img
                        src={member.image}
                        alt={member.name}
                        class="member-photo"
                />
                <div class="member-role">{member.role}</div>
            </div>

            <div class="bio-container">
                <h2 class="member-name">{member.name}</h2>
                <p class="member-bio">{member.bio}</p>
            </div>
        </section>
    {/each}
</main>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: var(--primary);
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        max-height: 50px;
    }

    .nav-logo {
        height: 84px;
        width: auto;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        color: var(--background);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
    }

    .nav-link:hover {
        color: var(--accent);
    }

    .board-depth {
        padding: 100px 2rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .page-title {
        text-align: center;
        color: var(--primary);
        margin-bottom: 3rem;
    }

    .member-section {
        display: flex;
        gap: 3rem;
        margin-bottom: 4rem;
        align-items: center;
        padding: 2rem;
        background: rgba(255,255,255,0.1);
        border-radius: 12px;
    }

    .member-section.reverse {
        flex-direction: row-reverse;
    }

    .image-container {
        flex: 1;
        position: relative;
        max-width: 400px;
    }

    .member-photo {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .member-role {
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary);
        color: var(--background);
        padding: 0.5rem 1.5rem;
        border-radius: 20px;
        font-weight: bold;
        white-space: nowrap;
    }

    .bio-container {
        flex: 1;
        padding: 1rem;
    }

    .member-name {
        color: var(--primary);
        margin-bottom: 1.5rem;
    }

    .member-bio {
        line-height: 1.6;
        color: var(--text);
        font-size: 1.1rem;
    }

    @media (max-width: 768px) {
        .member-section {
            flex-direction: column;
        }

        .member-section.reverse {
            flex-direction: column;
        }

        .image-container {
            max-width: 300px;
        }
    }
</style>
