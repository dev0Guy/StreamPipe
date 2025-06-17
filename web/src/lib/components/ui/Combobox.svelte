<script lang="ts">
    import CheckIcon from "@lucide/svelte/icons/check";
    import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
    import { tick } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";

    const {
        options,
        searchPlaceholder = "option",
        selectedIndex,
        onElementSelect,
        ...rest
    } = $props();

    let open = $state(false);
    let triggerRef = $state<HTMLButtonElement>(null!);
    let value = $state(
        selectedIndex !== undefined
            ? (options[selectedIndex]?.value ?? "")
            : "",
    );

    const selectedValue = $derived(
        options.find((f) => f.value === value)?.label,
    );

    // We want to refocus the trigger button when the user selects
    // an item from the list so users can continue navigating the
    // rest of the form with the keyboard.
    function closeAndFocusTrigger() {
        open = false;
        tick().then(() => {
            triggerRef.focus();
        });
    }
</script>

<Popover.Root bind:open>
    <Popover.Trigger bind:ref={triggerRef}>
        {#snippet child({ props })}
            <Button
                variant="outline"
                class="w-[200px] justify-between"
                {...props}
                role="combobox"
                aria-expanded={open}
            >
                {selectedValue || `Select a ${searchPlaceholder}...`}
                <ChevronsUpDownIcon class="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
        {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-[300px] p-0">
        <Command.Root>
            <Command.Input placeholder="Search {searchPlaceholder}..." />
            <Command.List>
                <Command.Empty>No {searchPlaceholder} found.</Command.Empty>
                <Command.Group>
                    {#each options as option}
                        <Command.Item
                            value={option.value}
                            {...rest}
                            onSelect={() => {
                                value = option.value;
                                onElementSelect?.(option);
                                closeAndFocusTrigger();
                            }}
                        >
                            <CheckIcon
                                class={cn(
                                    "mr-2 size-4",
                                    value !== option.value &&
                                        "text-transparent",
                                )}
                            />
                            {option.label}
                        </Command.Item>
                    {/each}
                </Command.Group>
            </Command.List>
        </Command.Root>
    </Popover.Content>
</Popover.Root>
