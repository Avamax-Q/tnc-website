<script>
    function copyEmail() {
        const email = "club@thenextchapter.example"; // Replace with your actual email
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied to clipboard!");
        });
    }
</script>

<footer class="footer">
    <div class="footer-content">
        <span class="club-name">The Next Chapter</span>
        <nav>
            <ul>
                <li>
                    <a href="https://instagram.com/yourclub" target="_blank" title="Instagram">
                        <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153A4.904 4.904 0 0 1 2.587 18.55c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.587c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/company/yourclub" target="_blank" title="LinkedIn">
                        <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/yourclub" target="_blank" title="Medium">
                        <svg class="icon" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-1.5 16H6.5V5h11v14zM9.5 7l2 2 2-2v10l-2-2-2 2V7z"/>
                        </svg>
                    </a>
                </li>
                <li class="contact-item">
                    <a href="#" on:click|preventDefault={copyEmail} style="display: inline-flex; align-items: center;">
                        <span style="margin-right: 4px;">Contact Us</span>
                        <span class="contact-email">club@thenextchapter.example</span>
                    </a>
                </li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
        </nav>
    </div>
    <div class="copyright">
        &copy; {new Date().getFullYear()} VIT, The Next Chapter. All rights reserved.
    </div>
</footer>

<style>
    .footer {
        background: var(--primary);
        color: var(--background);
        padding: 40px;
        text-align: center;
    }
    .footer-content {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .club-name {
        font-weight: bold;
        color: var(--secondary);
        font-size: 1.25rem;
    }
    .footer nav ul {
        display: flex;
        gap: 24px;
        list-style: none;
        padding: 0;
        margin: 0;
        align-items: center;
    }
    .footer nav a {
        color: var(--background);
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .footer nav a:hover {
        color: var(--accent);
    }
    .copyright {
        font-size: 0.875rem;
        color: var(--secondary);
    }
    .icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
    }
    .contact-item {
        position: relative;
    }
    .contact-email {
        display: none;
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent);
        color: var(--primary);
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .contact-item:hover .contact-email {
        display: block;
    }
</style>
