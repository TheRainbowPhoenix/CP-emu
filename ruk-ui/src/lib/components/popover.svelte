<script>
    import { onMount } from 'svelte';
  
    let parent;
    export let visible = false;
  
    /** @type {HTMLDivElement} */
    let popover;
    let position = { x: 0, y: 0 };
  
    onMount(() => {
        parent = popover.parentElement;
        if (parent) {
            const rect = parent.getBoundingClientRect();
            const popoverRect = popover.getBoundingClientRect();

            position = {
                x: rect.left + window.scrollX,
                y: rect.top + window.scrollY // + (rect.height - popoverRect.height) / 2
            };
        
            // Adjust the position based on the width and height of the popover
            if (position.x + popoverRect.width > window.innerWidth) {
                position.x -= popoverRect.width;
            } else {
                position.x += rect.width;
            }

            // position.y += (rect.height - popoverRect.height) / 2;

        }
      
    });
  </script>

    
<div
    bind:this={popover}
    class="popover {visible ? 'visible' : ''}"
    style="--x: {position.x}px; --y: {position.y}px;"
>
    <div class="tip"></div>
    <slot></slot>
</div>

  
  <style>
    .popover {
        position: absolute;
        background: #2f2f2f;
        border: 2px solid #2f2f2f;

        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;

        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transform: translate(var(--x), var(--y));

        box-sizing: border-box;
        max-width: calc(100vw - 16px);
        height: auto;
        max-height: calc(100dvh - 16px);
        display: flex;
        position: fixed;
        inset: 0 auto auto 0;
        overflow: visible;
        opacity: 1 !important;
        display: none;
        z-index: 800;
    }

    .popover.visible {
        display: block;
    }

    .tip {
        position: absolute;
        top: 0px;
        translate: 0px -6px;
        inset-inline: auto 100%;
        inset-block-start: 50%;
        clip-path: polygon(50% 50%, 105% 100%, 105% 0);
        width: 10px;
        height: 10px;
        background: #2f2f2f;
        border: 1px solid #2f2f2f;
    }
  </style>
