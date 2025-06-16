<script lang="ts">
    import MenuButton from "$components/navbar/MenuButton.svelte";
    import StreamSelector from "$components/navbar/StreamSelector.svelte";
    import Menu from "$components/tmp/Menu.svelte";
    import SearchBar from "./SearchBar.svelte";
</script>

<nav>
    <!-- <Menu /> -->
    <!-- <StreamSelector /> -->
    <!-- <SearchBar /> -->
</nav>

<style>
    nav {
        font-size: 1.4rem;
        height: 2rem;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        display: flex;
        gap: 1em;
        align-items: center;
        margin-bottom: clamp(1rem, 1%, 3rem);
        margin-top: clamp(1rem, 1%, 3rem);
        margin-left: min(1%, 5rem);
    }
</style>
