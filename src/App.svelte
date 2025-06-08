<script>
  import About from './components/About.svelte';
  import Board from './components/Board.svelte';
  import Events from './components/Events.svelte';
  import Blogs from './components/Blogs.svelte';
  import Footer from './components/Footer.svelte';
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
</script>

<main>
  <div class="fixed-controls">
    <img src="/static/assets/tnc-logo.png" alt="TNC Logo" class="fixed-logo" />
    <button class="goto-top" on:click={scrollToTop}>↑</button>
  </div>
  <About />
  <Board />
  <Events />
  <Blogs />
  <Footer />
</main>

<style>
  main {
    background: #cec9bb;
    color: #2e3440;
    font-family: sans-serif;
  }
  .fixed-controls {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .fixed-logo {
    height: 168px;
    width: 168px;
    object-fit: contain;
    pointer-events: auto;
  }
  .goto-top {
    background: var(--accent);
    color: var(--background);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    pointer-events: auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .goto-top:hover {
    background: var(--secondary);
  }
</style>
