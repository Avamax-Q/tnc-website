<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

    export let boardMembers = [
        { name: 'Hamsini', role: 'Chairperson', image: '/static/assets/board/board-1.png' },
        { name: 'Tarun', role: 'Secretary', image: '/static/assets/board/board-2.png' },
        { name: 'Sam', role: 'Vice-Chair', image: '/static/assets/board/board-3.png' },
        { name: 'Darsh', role: 'Co-Secretary', image: '/static/assets/board/board-4.png' },
        { name: 'Aryaman', role: 'Management', image: '/static/assets/board/board-5.png' },
        { name: 'Akhil', role: 'Editorial', image: '/static/assets/board/board-6.png' },
        { name: 'Shriram', role: 'Publicity', image: '/static/assets/board/board-7.png' },
        { name: 'Krishna', role: 'Creative', image: '/static/assets/board/board-8.png' },
        { name: 'Joshua', role: 'Outreach', image: '/static/assets/board/board-9.png' },
        { name: 'Leo', role: 'Design', image: '/static/assets/board/board-10.png' }
    ];

    let membersContainer;

    onMount(() => {
        // Calculate total width of all cards and gaps
        const cardWidth = 240; // min-width of .member-card
        const gap = 32;
        const totalWidth = (cardWidth * boardMembers.length) + (gap * (boardMembers.length - 1)) + 80;

        // Set the width of the members container to the total
        membersContainer = document.querySelector('.members-container');
        gsap.set(membersContainer, { width: totalWidth});

        // Create horizontal scroll effect
        gsap.to(membersContainer, {
            x: () => -(totalWidth-800),
            ease: "none",
            scrollTrigger: {
                trigger: ".board-section",
                start: "top 20%",
                end: "+=3000",
                scrub: 2,
                pin: true,
                markers: true,
            }
        });
    });
</script>

<section id="board" class="board-section">
    <h2>Our Team</h2>
    <div class="board-scroll-container">
        <div class="members-container">
            {#each boardMembers as member}
                <div class="member-card">
                    <img src={member.image} alt={member.name} class="member-image" />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .board-section {
        padding: 80px 40px;
        background: var(--background);
        color: var(--text);
        min-height: 100vh;
    }
    .board-section h2 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--primary);
        margin-bottom: 48px;
        text-align: center;
    }
    .board-scroll-container {
        width: 100%;
        overflow: hidden;
        margin: 0 auto;
    }
    .members-container {
        display: inline-flex;
        gap: 32px;
        padding: 0 40px;
    }
    .member-card {
        background: var(--primary);
        color: var(--background);
        border-radius: 12px;
        padding: 24px 32px;
        min-width: 240px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        flex-shrink: 0;
    }
    .member-card h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 8px;
    }
    .member-card p {
        font-size: 1rem;
        color: var(--secondary);
    }
    .member-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 16px;
    }
</style>
