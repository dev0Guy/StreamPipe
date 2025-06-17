<script>
  import "@xyflow/svelte/dist/style.css";
  import { Background, SvelteFlow } from "@xyflow/svelte";

  import NodeElement from "$lib/components/ui/pipeline/NodeElement.svelte";

  let nodes = $state.raw([
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "1", type: "Topic", name: "Inside" },
      type: "graphConnectorNode",
    },
    {
      id: "2",
      position: { x: 0, y: 100 },
      data: { label: "2" },
      type: "graphConnectorNode",
    },
  ]);

  let edges = $state.raw([{ id: "e1-2", source: "1", target: "2" }]);
  const nodeTypes = { graphConnectorNode: NodeElement };
</script>

<div style:width="100vw" style:height="100vh">
  <SvelteFlow
    bind:nodes
    bind:edges
    {nodeTypes}
    fitView
    proOptions={{ hideAttribution: true }}
  >
    <Background bgColor="#1e272e" />
  </SvelteFlow>
</div>
