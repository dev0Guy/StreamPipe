<script lang="ts">
	import { Handle, Position, type NodeProps } from '@xyflow/svelte';

	let { isConnectable, id, data }: NodeProps = $props();

	let bgColor = data.bgColor || '#f0f0f0';
	let icon = data.icon || null;

	// let { updateNodeData } = useSvelteFlow();
</script>

<Handle type="target" position={Position.Left} {isConnectable} />
<div class="node">
	<div class="node-icon" style="background-color: {bgColor}">
		{#if icon}
			<div class="icon-wrapper">
				<svelte:component this={icon} />
			</div>
		{:else}
			<!-- default icon -->
			<svg
				class="icon-wrapper"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M12 5v14M5 12h14" />
			</svg>
		{/if}
	</div>
	<div class="node-content">
		<div class="node-type">{data.type}</div>
		<div class="ndode-name">{data.name}</div>
	</div>
</div>
<Handle type="source" position={Position.Right} {isConnectable} />

<style>
	.node {
		display: flex;
		align-items: center;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		overflow: hidden;
		width: 240px;
		font-family: sans-serif;
		background: white;
		border: 1px solid #ddd;
	}
	.node-icon {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.node-icon .icon-wrapper {
		color: white;
		width: 24px;
		height: 24px;
	}

	.node-content {
		padding: 0.5rem 1rem;
	}

	.node-type {
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 1px;
		color: #666;
	}

	.node-name {
		font-size: 1rem;
		font-weight: bold;
		margin-top: 2px;
		color: #222;
	}
</style>
