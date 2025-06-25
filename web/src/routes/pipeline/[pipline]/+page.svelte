<script lang="ts">
  import {
    SvelteFlow,
    Controls,
    type Node,
    type Edge,
    Background,
  } from "@xyflow/svelte";
  import "@xyflow/svelte/dist/style.css";

  import * as ContextMenu from "$lib/components/ui/context-menu";
  import NodeElement from "$lib/components/ui/pipeline/NodeElement.svelte";
  import "@xyflow/svelte/dist/style.css";
  import InformationEdge from "$lib/components/ui/pipeline/InformationEdge.svelte";

  let {
    data,
  }: {
    data: {
      nodes: Node[];
      edges: Edge[];
    };
  } = $props();

  let nodes = $state.raw<Node[]>(data.nodes);
  let edges = $state.raw<Edge[]>(data.edges);
  const nodeTypes = { PiplineElement: NodeElement };
  const edgeTypes = {
    informationMovment: InformationEdge,
  };
</script>

<!-- TODO: add select of dark of light mode and change the background color a cordingly -->
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <div style:width="100vw" style:height="100vh">
      <SvelteFlow
        bind:nodes
        bind:edges
        {nodeTypes}
        {edgeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background bgColor="transparent" />
        <Controls buttonBgColor="transparent" showLock={false} />
      </SvelteFlow>
    </div>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>Add Element</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>

<style>
  :global(.svelte-flow) {
    background-color: var(--bg-color) !important;
  }
</style>
