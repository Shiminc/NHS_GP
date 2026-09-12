import {colorScale} from './color-data.js' 
export const drawCirclePack = (root, descendants, leaves) => {
    const width = 800;
    const height = 800;
    const margin = {
        top: 1, 
        right: 1,
        bottom: 1, 
        left: 1
    }
    const innerWidth = width - margin.right - margin.left;
    const innerHeight = height - margin.top - margin.bottom;

 
    const packLayoutGenerator = d3.pack()
        .size([innerWidth, innerHeight])
        .padding(3);
    
    //You must call root.sum before passing the hierarchy to the pack layout. You probably also want to call root.sort to order the hierarchy before computing the layout. 
    root.sum(d=> d.staff_numbers)
    packLayoutGenerator(root);

    console.log(descendants)

    const svg = d3.select("#circle-pack")
        .append("svg")
        .attr("viewBox",`0 0 ${width} ${height}`)
            .append("g")
            .attr("transform",`translate(${margin.left},${margin.top})`);
    
    svg.selectAll(".pack-circle")
    .data(descendants)
    .join('circle')
        // .attr('class','pack-circle')
        .attr('class',d=>`pack-circle ${d.depth}`)
        .attr('cx',d=>d.x)
        .attr('cy',d=>d.y)
        .attr('r',d=>d.r)
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
        // .attr('stroke', d=> d.depth === 0 ? 'gray':'none');


    // add label
    // minRadius for cicle that could show the label
    const minRadius = 18;
    svg
        .selectAll('.leaf-label-container')
        .data(leaves.filter(leave => leave.r > minRadius))
        // .data(leaves)
        .join('foreignObject')
            .attr('class','leaf-label-container')
            .attr('width',d=>3*d.r)
            .attr('height',20)
            .attr('x', d=>d.x - 1.5*d.r)
            .attr('y',d=>d.y)
        .append('xhtml:div')
            .attr('class','leaf-label')
            .text(d=>d.id)

    svg
        .selectAll('.role-label-container')
        .data(descendants.filter(descendant => descendant.depth === 1 & descendant.r >20 ))
        // .data(leaves)
        .join('foreignObject')
            .attr('class','role-label-container')
            .attr('width',d=>d.r)
            .attr('height',40)
            .attr('x', d=>d.x - d.r/2)
            .attr('y',d=>d.y - d.r +20)
        .append('xhtml:div')
            .attr('class','role-label')
            .text(d=>d.id)
};