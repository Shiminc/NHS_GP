import {colorScale} from './color-data.js' 


export const drawIcicle = (root, descendants, leaves) => {
    const width = 200;
    const height = 200;
    const margin = {
        top: 1, 
        right: 1,
        bottom: 1, 
        left: 1
    }
    const innerWidth = width - margin.right - margin.left;
    const innerHeight = height - margin.top - margin.bottom;

 
    const icicleLayoutPartition = d3.partition()
        .size([innerWidth, innerHeight])
        .padding(1)
        .round(true);

    //You must call root.sum before passing the hierarchy to the pack layout. You probably also want to call root.sort to order the hierarchy before computing the layout. 
    root.sum(d=> d.staff_numbers)
    .sort((a,b)=> b.value-a.value)

    const root_icicle = icicleLayoutPartition(root);

        const svg = d3.select("#icicle-chart")
        .append("svg")
        .attr("id",'svg-icicle')
        .attr("viewBox",`0 0 ${width} ${height}`)
          
    // Append a group for each leaf
    const icicle = svg
        .selectAll(".icicle")
        .data(root_icicle)
        .join("g")
        .attr("class", "icicle")
        .attr("transform", d => `translate(${d.x0}, ${d.y0})`);

    // just to see how the layout works        
    // icicle.append('text')
    //     .text(d=>d.id)
    //     .style("font-size", '1px')

    icicle.append('rect')
        .attr('class','icicle-rect')
        .attr("x", 0)
        .attr("y", 0)
        .attr('fill',d=>{
                switch (d.depth){
                    case 1:
                      return colorScale(d.id)
                    case 2:
                      return d3.interpolate(colorScale(d.parent.id),'white')(0.5)
                    default:
                        return "gray"
                }
        })   
        // .attr('fill',d=>colorScale(d.parent))    
        .attr('width',d=>d.x1-d.x0)
        .attr('height',d=>d.y1-d.y0)
        // .attr('stroke','black')

    icicle.append('text')
        .attr('class','icicle-rect-text')
        .attr("x", -20)
        .attr("y", 1)
        .text(d=>d.id)
        .style("font-size", '1px')
}