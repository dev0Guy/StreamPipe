import { nodes, edges } from '../data'


export function load({ params }): { nodes: object[], edges: object[] } {
    // Load Data from mongo 
    return {
        nodes: nodes,
        edges: edges,
    };
}