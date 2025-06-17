<script>
  import "@xyflow/svelte/dist/style.css";
  import { Background, SvelteFlow } from "@xyflow/svelte";
  import Node from "$lib/components/ui/pipeline/Node.svelte";
  import * as ContextMenu from "$lib/components/ui/context-menu";
  let { data } = $props();

  let nodes = $state.raw(data.nodes);
  let edges = $state.raw(data.edges);
  const nodeTypes = { PiplineElement: Node };
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger>
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
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>Add Element</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
