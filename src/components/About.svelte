<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        // Animate main content
        gsap.from('.about-content', {
            x: 200,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });
    });
</script>

<section id="about" class="about-section">
    <div class="about-content">
        <h1>The Next Chapter</h1>
        <p>
            Welcome to <span class="highlight">The Next Chapter</span>, a vibrant book club for passionate readers!
            We gather to share stories, discuss ideas, and celebrate the written word.
            Whether you're a seasoned bibliophile or just starting your reading journey, you'll find a warm community here.
        </p>
    </div>
</section>

<style>
    .about-section {
        min-height: 100vh;
        padding: 40px;
        position: relative;
        overflow: hidden;
        background: var(--background);
        color: var(--text);
    }
    .logo {
        position: absolute;
        top: 40px;
        left: 40px;
        height: 168px;
        width: 168px;
        object-fit: contain;
    }
    .about-content {
        max-width: 600px;
        margin-left: auto;
        margin-right: 40px;
        padding-top: 80px;
    }
    .about-content h1 {
        font-size: 2.25rem;
        font-weight: bold;
        color: var(--primary);
        margin-bottom: 24px;
    }
    .about-content p {
        font-size: 1.125rem;
        line-height: 1.5;
        margin-bottom: 32px;
    }
    .highlight {
        color: var(--secondary);
        font-weight: bold;
    }
</style>
