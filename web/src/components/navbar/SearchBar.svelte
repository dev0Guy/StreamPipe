<script>
    import Icon from "@iconify/svelte";
    import BasicElement from "./BasicElement.svelte";
</script>

<div>
    <BasicElement class="search-button" --border-radius="5em">
        <input type="text" placeholder="Search.." />
        <Icon icon="ic:sharp-search" height="100%" />
    </BasicElement>
</div>

<style>
    div {
        height: 100%;
        width: auto;
        /* padding: 10%; */
        /* width: 3rem; */
        /* background-color: red; */
    }
    div :global(.search-button) {
        background-color: red !important;
        width: auto;
        display: flex;
        align-items: center;
        /* height: 100%; */
        /* background-color: blue; */
        /* padding: auto; */
        /* border-radius: 0; */
        /* height: 10rem; */
    }
    input {
        /* margin-left: 20%; */
        height: 100%;
        background-color: transparent;
        border: none;
        font-size: 1rem;
    }
</style>
