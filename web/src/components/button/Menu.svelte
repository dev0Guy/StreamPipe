<script lang="ts">
</script>

<label class="hamburger-menu">
    <input type="checkbox" />
</label>

<style>
    :root {
        --bar-width: 60px;
        --bar-height: 8px;
        --hamburger-gap: 6px;
        --foreground: #333;
        --background: white;
        --hamburger-margin: 8px;
        --animation-timing: 200ms ease-in-out;
        --hamburger-height: calc(
            var(--bar-height) * 3 + var(--hamburger-gap) * 2
        );
    }

    .hamburger-menu::before,
    .hamburger-menu::after,
    .hamburger-menu input {
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: var(--foreground);
        border-radius: 10em;
        transform-origin: left center;
        transition:
            opacity var(--animation-timing),
            width var(--animation-timing),
            rotate var(--animation-timing),
            translate var(--animation-timing),
            background-color var(--animation-timing);
    }

    .hamburger-menu {
        --x-width: calc(var(--hamburger-height) * 1.41421356237);

        display: flex;
        flex-direction: column;
        gap: var(--hamburger-gap);
        width: max-content;
        z-index: 2;
        cursor: pointer;
    }

    .hamburger-menu:has(input:checked)::before {
        rotate: 45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / -2);
    }

    .hamburger-menu:has(input:checked)::after {
        rotate: -45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / 2);
    }

    .hamburger-menu input {
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger-menu input:checked {
        opacity: 0;
        width: 0;
    }
</style>
