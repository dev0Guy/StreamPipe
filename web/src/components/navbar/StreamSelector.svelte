<script lang="ts">
    import BasicElement from "$components/navbar/BasicElement.svelte";
    let streams = ["chapter1", "chapter2", "chapter3", "chapter4"];
</script>

<nav>
    <BasicElement class="current-stream" --border-radius="5em">
        {streams[0]}
    </BasicElement>
    <!-- <ul>
        {#each streams.slice(1) as stream, i}
            <li><a href="#{stream}">{stream}</a></li>
        {/each}
    </ul> -->
</nav>

<style>
    nav {
        height: 100%;
        position: relative;
    }
</style>
