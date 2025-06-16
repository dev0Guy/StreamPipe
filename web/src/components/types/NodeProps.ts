import type { NodeProps } from "@xyflow/svelte";

export interface ConnectionNodeProps extends NodeProps {
    bgColor?: string;
    icon?: any; // Svelte component or null
    type: string;
    name: string;
}
