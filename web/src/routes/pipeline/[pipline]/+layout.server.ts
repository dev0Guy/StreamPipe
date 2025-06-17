import { nodes, edges } from '../data'


export function load({ params }) {
    // Load Data from mongo 
    let options = []
    let currentVlaue = { label: params.pipline, value: params.pipline }
    options.unshift({ label: 'OtherPipeline', value: 'OtherPipeline' })
    options.unshift(currentVlaue)

    return {
        selectedIdx: 0,
        options: options
    };
}