<script lang="ts">
    let { children, hoverEnabled = true, class: cls } = $props();
</script>

<div class="module-border-wrap">
    <div class="module">
        {@render children()}
    </div>
</div>

<style>
    .module-border-wrap {
        --border-size: 0.05em;
    }
    .module-border-wrap {
        aspect-ratio: 1;
        padding: calc(var(--border-size) * 10);
        position: relative;
        background-image: linear-gradient(#2f3640, #2f3640),
            linear-gradient(
                135deg,
                rgba(0, 0, 255, 0.4),
                rgba(255, 0, 255, 0.4)
            );
        border: var(--border-size) solid transparent;
        border-radius: var(--border-radius, 50%);
        height: calc(100% - 2 * var(--border-size));
        background-origin: border-box;
        background-clip: padding-box, border-box;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    .module {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f0f0f0;
        border-radius: var(--border-radius, 50%);
        z-index: 1;
    }
</style>
