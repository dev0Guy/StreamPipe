<script lang="ts">
	import { Handle, Position, type NodeProps } from "@xyflow/svelte";

	import * as ContextMenu from "$lib/components/ui/context-menu";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";
	import PencilIcon from "@lucide/svelte/icons/pencil";
	import CircleOffIcon from "@lucide/svelte/icons/circle-off";
	import EyeIcon from "@lucide/svelte/icons/eye";

	// export let icon = "mdi:database";
	// export let title = "Some Title";
	// export let description =
	// 	"Some very long description that should be truncated gracefully";
	import { iconMap } from "$lib/util/iconMap";

	let { isConnectable, id, data } = $props();
	let Icon = iconMap[data.iconName] || CircleOffIcon;
	let title = data.title;
	let description = data.description;
</script>

<Handle type="source" position={Position.Right} {isConnectable} />

<ContextMenu.Root>
	<div on:contextmenu={(e) => e.stopPropagation()} role="presentation">
		<ContextMenu.Trigger>
			<div
				class="flex rounded-md overflow-hidden bg-white dark:bg-zinc-900 gap-4 border border-zinc-400 dark:border-zinc-600
         w-full max-w-md h-16
         sm:max-w-lg
         md:max-w-xl
         lg:max-w-2xl"
			>
				<!-- TODO Add dynamic background color to icon -->
				<div
					style:background-color="gray"
					class="flex items-center justify-center w-15"
				>
					<Icon size="80%" class="text-white" />
				</div>
				<div
					class="min-w-[100px] max-w-[300px] flex flex-col justify-center pr-4"
				>
					<h2
						class="text-base font-semibold text-black dark:text-white"
					>
						{title}
					</h2>
					<p
						class="text-sm text-zinc-600 dark:text-zinc-400 truncate"
					>
						{description}
					</p>
				</div>
			</div>
		</ContextMenu.Trigger>
	</div>
	<ContextMenu.Content>
		<ContextMenu.Item>
			<EyeIcon />
			<span>View</span>
		</ContextMenu.Item>
		<ContextMenu.Item>
			<PencilIcon />
			<span>Edit</span>
		</ContextMenu.Item>

		<hr class="my-1 border-t border-zinc-200 dark:border-zinc-700" />
		<ContextMenu.Item>
			<Trash2Icon />
			<span class="text-red-500">Delete</span>
		</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>

<Handle type="source" position={Position.Right} {isConnectable} />

<!-- <div
					class="bg-zinc-200 dark:bg-zinc-800 p-4 h-full flex items-center justify-center"
				>
					<Icon
						{icon}
						class="text-zinc-600 dark:text-zinc-300"
						width="48"
						height="48"
					/>
				</div>

				<CardContent class="px-4 py-2 min-w-[200px] max-w-[300px]">
					<h2
						class="text-base font-semibold text-black dark:text-white"
					>
						{title}
					</h2>
					<p
						class="text-sm text-zinc-600 dark:text-zinc-400 truncate"
						title={description}
					>
						{description}
					</p> 
				</CardContent>-->

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
