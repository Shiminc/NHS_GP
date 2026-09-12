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
        .attr('class','pack-circle')
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
        .attr('stroke', d=> d.depth === 0 ? 'gray':'none');


    // add label
    // minRadius for cicle that could show the label
    const minRadius = 22;
    // svg
    //     .selectAll('.leaf-label-container')
    //     .data(leaves.)

};