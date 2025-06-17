<script lang="ts">
    import Combobox from "$lib/components/ui/Combobox.svelte";

    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";

    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import SearchCommand from "$lib/components/ui/pipeline/SearchCommand.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    let isMenuOpen = $state(true);
    const isMac = navigator.platform.toUpperCase().includes("MAC");

    function onKeydown(event: KeyboardEvent) {
        const isCtrlOrCmdPressed = isMac ? event.metaKey : event.ctrlKey;
        switch (event.key) {
            case "Escape":
                isMenuOpen = false;
                break;
            case "f":
                event.preventDefault();
                if (isCtrlOrCmdPressed) {
                    isMenuOpen = !isMenuOpen;
                }
                break;
        }
    }

    function onSearchClick() {
        isMenuOpen = !isMenuOpen;
    }

    let { children } = $props();
    let options = $state([
        {
            value: "1",
            label: "1",
        },
        {
            value: "2",
            label: "2",
        },
        {
            value: "3",
            label: "3",
        },
    ]);
</script>

<svelte:window on:keydown={onKeydown} />

{@render children()}
<NavigationMenu.Root
    class="absolute top-0 left-0 w-full bg-transperent px-4 py-4"
>
    <NavigationMenu.List class="flex items-center justify-between gap-4">
        <NavigationMenu.Item>
            <Combobox {options} searchPlaceholder="pipline" />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link>
                {#snippet child()}
                    <button
                        class="{navigationMenuTriggerStyle()} cursor-pointer"
                        onclick={onSearchClick}>Search</button
                    >
                {/snippet}
            </NavigationMenu.Link>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>
{#if isMenuOpen}
    <SearchCommand />
{/if}

<!-- 
<NavigationMenu.Root
    class="absolute top-0 left-0 w-full z-50 px-4 py-2 bg-white dark:bg-zinc-900 shadow-md"
>
    <NavigationMenu.List>
        <Collapsible.Root>
            <Collapsible.Trigger
                >Can I use this in my project?</Collapsible.Trigger
            >
            <Collapsible.Content>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
            </Collapsible.Content>
        </Collapsible.Root>
        <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
            <NavigationMenu.Content>
                <NavigationMenu.Link>Link</NavigationMenu.Link>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root> -->
