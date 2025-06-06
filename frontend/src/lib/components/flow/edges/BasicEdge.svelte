<script lang="ts">
	import { BaseEdge, getBezierPath, type EdgeProps } from '@xyflow/svelte';

	let { id, sourceX, sourceY, targetX, targetY, markerEnd }: EdgeProps = $props();

	let [edgePath, labelX, labelY] = $derived(
		getBezierPath({
			sourceX,
			sourceY,
			targetX,
			targetY,
			sourcePosition: 'right',
			targetPosition: 'left',
			curvature: 0.2
		})
	);

	// Calculate if edge is going backwards (right to left)
	let isReversed = $derived(targetX < sourceX);

	// Calculate distance for gradient effect
	let distance = $derived(
		Math.sqrt(Math.pow(targetX - sourceX, 2) + Math.pow(targetY - sourceY, 2))
	);
</script>

<svg>
	<!-- Define the blue gradient with opacity transition -->
	<defs>
		<linearGradient
			id="blueGradient-{id}"
			x1={isReversed ? '100%' : '0%'}
			y1="0%"
			x2={isReversed ? '0%' : '100%'}
			y2="0%"
		>
			<stop offset="0%" style="stop-color:#2563eb;stop-opacity:0" />
			<stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
		</linearGradient>
	</defs>

	<BaseEdge
		{id}
		path={edgePath}
		style="stroke: url(#blueGradient-{id}); stroke-width: 3; fill: none;"
		markerEnd="url(#arrow-{id})"
	/>
</svg>

<style>
	svg {
		overflow: visible;
		filter: drop-shadow(0 1px 3px rgba(37, 99, 235, 0.2));
	}
</style>
