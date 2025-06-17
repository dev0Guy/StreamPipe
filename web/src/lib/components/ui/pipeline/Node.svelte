<script lang="ts">
	import Icon from "@iconify/svelte";
	import { Card, CardContent } from "$lib/components/ui/card";
	export let icon = "mdi:database";
	export let title = "Some Title";
	export let description =
		"Some very long description that should be truncated gracefully";
</script>

<Card
	class="flex items-center rounded-2xl overflow-hidden shadow-md w-fit bg-white dark:bg-zinc-900"
>
	<!-- Icon Section -->
	<div
		class="bg-zinc-200 dark:bg-zinc-800 p-4 h-full flex items-center justify-center"
	>
		<Icon
			{icon}
			class="text-zinc-600 dark:text-zinc-300"
			width="48"
			height="48"
		/>
	</div>

	<!-- Text Section -->
	<CardContent class="px-4 py-2 min-w-[200px] max-w-[300px]">
		<h2 class="text-base font-semibold text-black dark:text-white">
			{title}
		</h2>
		<p
			class="text-sm text-zinc-600 dark:text-zinc-400 truncate"
			title={description}
		>
			{description}
		</p>
	</CardContent>
</Card>
<!-- <script lang="ts">
	import { Handle, Position, type NodeProps } from "@xyflow/svelte";
	import type { ConnectionNodeProps } from "$components/types/NodeProps";
	import Icon from "@iconify/svelte";

	let { isConnectable, id, data }: ConnectionNodeProps = $props();

	let bgColor: string = data.bgColor || "gray";
	let color: string = data.iconColor || "white";
	let icon = data.icon || "mdi:database";
	let description: string = data.description || "Some Description";
	let title: string = data.title || "Some Title";
</script>

<Handle type="target" position={Position.Left} {isConnectable} />
<div class="node-container">
	<div class="node-icon" style:background-color={bgColor}>
		<Icon {icon} height="100%" {color} />
	</div>
	<div class="node-inforamtion">
		<h1 class="node-title">{title}</h1>

		<h2 class="node-description">{description}</h2>
	</div>
</div>
<Handle type="source" position={Position.Right} {isConnectable} />

<style>
	.node-container {
		background-color: white;
		border-radius: 1em;
		display: flex;
		align-items: center;
		width: fit-content;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		gap: 1em;
	}
	.node-inforamtion {
		padding: 0.1em;
	}
	.node-inforamtion .node-description {
		color: gray;
		font-size: 1em;
	}
	.node-inforamtion .node-title {
		font-size: 2em;
		color: rgb(0, 0, 0);
		font-weight: bold;
	}
	.node-icon {
		width: 20%;
		height: 100%;
	}
</style> -->
