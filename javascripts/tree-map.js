import {colorScale} from './color-data.js' 


export const drawTreeMap = (root, descendants, leaves) => {
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

 
    const mapLayoutGenerator = d3.treemap()
        .size([innerWidth, innerHeight])
        .paddingInner(1)
        .paddingOuter(1)
        .round(true);


        
    //You must call root.sum before passing the hierarchy to the pack layout. You probably also want to call root.sort to order the hierarchy before computing the layout. 
    // root.sum(d=> d.staff_numbers)
    mapLayoutGenerator(root);
    console.log(leaves)

    const svg = d3.select("#tree-map")
        .append("svg")
        .attr("id",'svg-map')
        .attr("viewBox",`0 0 ${width} ${height}`)
          
    // Append a group for each leaf
    const nodes = svg
        .selectAll(".node-container")
        .data(leaves.filter((d)=>d.depth===2))
        .join("g")
        .attr("class", "node-container")
        .attr("transform", d => `translate(${d.x0}, ${d.y0})`);


    nodes.append('rect')
        .attr('class',d=>`treemap-rect depth-${d.depth}`)
        // .attr('x',d=>d.x0)
        // .attr('y',d=>d.y0)
        .attr("x", 0)
        .attr("y", 0)
        // .attr("rx", 3)
        // .attr("ry", 3)
        .attr('fill',d=>{
                switch (d.depth){
                    case 1:
                      return colorScale(d.id)
                    case 2:
                      return d3.interpolate(colorScale(d.parent.id),'white')(0.5)
                    default:
                        return "white"
                }
        })   
        // .attr('fill',d=>colorScale(d.parent))    
        .attr('width',d=>d.x1-d.x0)
        .attr('height',d=>d.y1-d.y0)
        .attr('stroke','black') 
        .attr('stroke-width','0.1')
    
    // option 1 using text to do label
    // nodes 
    // .append("text")
    //   .attr("class", d => `treemap-label treemap-label-${d.id.replaceAll(" ", "-").replaceAll("'", "")}`)
    //   .attr("x", 1)
    //   .attr("y", 2)
    //   .attr("fill", "white")
    //   .style("font-size", "1px")
    //   .style("font-weight", 500)
    //   .text(d => d.id)
    //   .style("opacity",d=>{
    //             // Hide the labels that are not fitting

    //             if ((d.x1-d.x0-1)<10){
    //                 return 0} else {
    //               return 1
    //             }
    //         })

    //option2: using html div to do label
    nodes.append('foreignObject')
            .attr('class','label-container')
            .attr('width',d=>d.x1-d.x0-1)
            .attr('height',d=>d.y1-d.y0)
            .attr("x", 0.5)
            .attr("y", 0)
            .append('xhtml:div')
            .attr('class','label')
            .attr('width',d=>d.x1-d.x0-1)
            .attr('height',d=>d.y1-d.y0)
            // .style('background-color','white')
            .text(d=>d.id)   
            .style("font-size", '10%')
            .style("opacity",d=>{
                // Hide the labels that are not fitting

                if ((d.x1-d.x0-1)<10){
                    return 0} else {
                  return 1
                }
            })
    
    nodes.append('foreignObject')
            .attr('class','label-container')
            .attr('width',d=>d.x1-d.x0-1)
            .attr('height',d=>d.y1-d.y0)
            .attr("x", 0.5)
            .attr("y", 2)
            .append('xhtml:div')
            .attr('class','label-value')
            .attr('width',d=>d.x1-d.x0-1)
            .attr('height',d=>d.y1-d.y0)
            .text(d=>d.value)   
            .style("font-size", '10%')
            .style("opacity",d=>{
                // Hide the labels that are not fitting

                if ((d.x1-d.x0-1)<10){
                    return 0} else {
                  return 1
                }
            })
//   // Hide the labels that are larger than their parent
//   d3.selectAll(".treemap-label")
//     .style("opacity", d => {
//       const textElement = document.querySelector(`.treemap-label-${d.id.replaceAll(" ", "-").replaceAll("'", "")}`);
//       const textWidth = textElement.getBBox().width;
//       console.log(textWidth)
//       if (textWidth > (d.x1-d.x0)){
//         return 0} else {
//             return 1
//         }
//     });

}