

export const nodes: object[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { title: "Topic", description: "Inside", iconName: "Route" },
    type: "PiplineElement",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
    type: "PiplineElement",
  },
]


export const edges: object[] = [{ id: "e1-2", source: "1", target: "2", animated: true, type: "informationMovment" }]