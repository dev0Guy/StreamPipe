<script>
	import { SvelteFlow, Background, Position, MiniMap } from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	import BasicNode from '$lib/components/flow/nodes/BasicNode.svelte';
	// @ts-ignore
	import BasicEdge from '$lib/components/flow/edges/basicEdge.svelte';
	// @ts-ignore
	import FaDatabase from 'svelte-icons/fa/FaDatabase.svelte';
	import Header from '$lib/components/Header.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	const nodeTypes = { textUpdater: BasicNode };
	const edgeTypes = { default: BasicEdge };

	let nodes = $state.raw([
		{
			id: 'node-1',
			type: 'textUpdater',
			position: { x: 0, y: 50 },
			sourcePosition: Position.Right,
			data: { type: 'Connector', name: 'some text', bgColor: 'red', icon: FaDatabase }
		},
		{
			id: 'node-2',
			type: 'textUpdater',
			position: { x: 300, y: 50 },
			data: { type: 'Processor', name: 'another node', bgColor: 'blue', icon: FaDatabase }
		}
	]);

	let edges = $state.raw([
		{
			id: 'e1-2',
			source: 'node-1',
			target: 'node-2',
			type: 'default'
		}
	]);
</script>

<div style:width="100vw" style:height="100ch">
	<Navigation />
	<SvelteFlow bind:nodes bind:edges {nodeTypes} {edgeTypes} fitView>
		<MiniMap />
		<Background />
	</SvelteFlow>
</div>
