<script lang="ts">
    import Combobox from "$lib/components/ui/Combobox.svelte";

    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";

    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import SearchCommand from "$lib/components/ui/pipeline/SearchCommand.svelte";
    import { Search } from "lucide-svelte";
    import { clickOutside } from "$lib/util/eventHandlers/clickOutside.js";
    import { goto } from "$app/navigation";
    import ToggleModeToggle from "$lib/components/ui/button/ToggleModeToggle.svelte";
    import { Button } from "$lib/components/ui/button/index.js";

    let isMenuOpen = $state(false);
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

    let { children, data } = $props();
    let options = $state(data.options);
</script>

<svelte:window on:keydown={onKeydown} />

{@render children()}
<NavigationMenu.Root
    class="absolute top-0 left-0 w-full bg-transperent px-4 py-4"
>
    <NavigationMenu.List class="flex items-center justify-between gap-4">
        <NavigationMenu.Item>
            <ToggleModeToggle />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <Combobox
                {options}
                selectedIndex={data.selectedIdx}
                searchPlaceholder="pipline"
                onElementSelect={(option) => goto(option.value)}
            />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
            <NavigationMenu.Link>
                <Button
                    onclick={onSearchClick}
                    variant="outline"
                    size="icon"
                    class="cursor-pointer"
                >
                    <Search />
                </Button>
            </NavigationMenu.Link>
        </NavigationMenu.Item>
    </NavigationMenu.List>
</NavigationMenu.Root>
{#if isMenuOpen}
    <div use:clickOutside={() => (isMenuOpen = false)}>
        <SearchCommand />
    </div>
{/if}

<style>
    :global(.svelte-flow) {
        background-color: var(--bg-color) !important;
    }
</style>
