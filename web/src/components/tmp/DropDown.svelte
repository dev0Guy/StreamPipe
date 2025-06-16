<script lang="ts">
    interface DropDownElement {
        text: string;
        href: string;
    }

    interface Props {
        elements: DropDownElement[];
        backgroundColor: string;
        color: string;
        padding: string;
        gap: string;
    }
    let {
        elements,
        backgroundColor = "inherit",
        color = "inherit",
        padding = "1em",
        gap = "0px",
    }: Props = $props();
</script>

<nav
    class="container"
    style:background-color={backgroundColor}
    style:color
    style:padding
    style:gap
>
    {#each elements as element}
        <div class="dropdown-element">
            <a class="element-link" href={element.href}>{element.text}</a>
        </div>
    {/each}
</nav>

<style>
    .container {
        background-color: var(--background-color);
        border-radius: 10%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: max-content;
    }
    .container .dropdown-element,
    .dropdown-element .element-link:link,
    .dropdown-element .element-link:visited {
        text-decoration: none;
        color: inherit;
    }

    .dropdown-element .element-link:hover {
        text-decoration: underline;
    }
</style>
