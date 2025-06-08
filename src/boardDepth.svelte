<script>
    import Details from './components/Details.svelte';
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
</script>

<main>
    <Details/>
</main>