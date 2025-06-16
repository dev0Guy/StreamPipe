<!-- src/lib/IconWrapper.svelte -->
<script>
    import Icon from "@iconify/svelte"; // Import the Icon component

    export let icon = "mdi:star"; // Default icon (Material Design star)
    export let size = "1rem"; // Default size
    export let color = "black"; // Default color
</script>

<Icon {icon} width={size} {color} />
