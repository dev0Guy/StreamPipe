import { nodes, edges } from '../data'


export function load(): { nodes: object[], edges: object[] } {
    return {
        nodes: nodes,
        edges: edges
    };
}