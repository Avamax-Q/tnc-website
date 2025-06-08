<script>
    export let events = [
        { title: 'Book of the Month',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/static/assets/events/event-1.jpg' },
        { title: 'Dungeons & Dragons', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: '/static/assets/events/event-2.jpg' },
        { title: 'Poetry Slam', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: '/static/assets/events/event-3.jpg' },
        { title: 'Linguistic Crossroads', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: '/static/assets/events/event-4.jpg' },
        { title: 'Author Meets', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: '/static/assets/events/event-5.jpg' },
        { title: 'Event 6 idfk', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: '/static/assets/events/event-6.jpg' }
    ];
</script>

<section id="events" class="events-section">
    <h2>Events</h2>
    <div class="events-grid">
        {#each events as event}
            <div class="event-card">
                <div class="event-bg" style="background-image: url('{event.image}')"></div>
                <div class="event-content">
                    <h3>{event.title}</h3>
                    <p class="description">{event.description}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .events-section {
        padding: 80px 40px;
        background: var(--background);
        color: var(--text);
        text-align: center;
    }
    .events-section h2 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--primary);
        margin-bottom: 48px;
    }
    .events-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 40px;
    }
    .event-card {
        position: relative;
        height: 300px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        transform: scale(1);
    }
    .event-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: blur(1px);
        transition: filter 0.3s ease;
    }
    .event-content {
        position: relative;
        height: 100%;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);
        transition: background 0.3s ease, opacity 0.3s ease;
    }
    .event-content h3 {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 12px;
        color: var(--secondary);
    }
    .event-content .date {
        color: var(--accent);
        font-weight: bold;
        margin-bottom: 12px;
    }
    .event-content .description {
        font-size: 1rem;
        color: var(--background);
    }
    .event-card:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: scale(1.1); /* Grows by 5% on hover */
        z-index: 1;
    }
    .event-card:hover .event-bg {
        filter: blur(0);
    }
    .event-card:hover .event-content {
        background: rgba(0, 0, 0, 0.2);
        opacity: 0.0;
    }
</style>
