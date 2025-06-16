<script>
    import Icon from "@iconify/svelte";

    let open = false;
</script>

<div>
    <button class="menu-arrow" on:click={() => (open = true)}>
        <Icon
            icon="iconamoon:arrow-right-2-duotone"
            class="menu-arrow-icon"
            height="100%"
        />
    </button>
</div>

<style>
    .menu-arrow {
        position: fixed;
        left: calc(-1.5%);
        top: 50%; /* slightly below center */
        transform: translateY(-50%);
        padding-left: 1%;

        width: clamp(50px, 6vw, 80px); /* responsive with min/max */
        height: clamp(50px, 6vw, 80px);

        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        z-index: 100;
    }
</style>
