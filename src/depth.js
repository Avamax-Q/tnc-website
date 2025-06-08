import { mount } from 'svelte'
import './app.css'
import App from './boardDepth.svelte'

const app = mount(App, {
    target: document.getElementById('app'),
})

export default app
