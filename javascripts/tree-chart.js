import {colorScale} from './color-data.js' 

export const drawTree = (root, descendants, leaves) => {
    const width = 1000;
    const height = 1000;
    const margin = {
        top: 200, 
        right: 200,
        bottom: 200, 
        left: 200
    }
    const innerWidth = width - margin.right - margin.left;
    const innerHeight = height - margin.top - margin.bottom;

 
    const treeLayoutGenerator = d3.tree()
        .size([innerWidth, innerHeight]);
    
    treeLayoutGenerator(root);
    console.log('tree')
    console.log(root)
    console.log(root.links())
    console.log(descendants)

    const linkGenerator = d3.link(d3.curveBumpY)
    // for horizontal tree
    .x((d)=>d.y)
    .y((d)=>d.x)

    const svg = d3.select("#tree-chart")
                .append('svg')
                    .attr('viewBox',`0 0 ${width} ${height}`)
                .append('g')
                    .attr('transform',`translate(${margin.left},${margin.top})`)

    svg.selectAll('.tree-link')
    .data(root.links())
    .join('path')
        .attr('class','tree-link')
        .attr('d',d=>linkGenerator(d))
        .attr('fill','none')
        .attr('stroke',d=>colorScale(d.source))
        .attr('stroke-opacity',0.6)

    svg.selectAll('.label-tree')
    .data(descendants)
    .join('text')
        .attr('class','label-tree')
        .attr('x', d => d.children ? d.y-2 : d.y+2)
        .attr('y', d => d.x)
        .attr('text-anchor', d => d.children ? 'end':'start')
        .attr('alignment-baseline','middle')
        // .attr('paint-order','stroke')
        .attr('stroke-width',2)
        .style('font-size','6px')
        .text(d =>d.id)
      
}