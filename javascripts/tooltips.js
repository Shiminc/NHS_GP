function hideTooltips(e,d) {
    // remove the tooltips
    d3.select("#toolTip-text")
    .remove();
    d3.select("#toolTip-background")
    .remove();

    console.log('out')
}

function showTooltips(e,d) {
    //use the centroid of the circle as the bases of coordinate to show tooltips
    // const cx = e.target.getAttribute('cx')
    // const cy = e.target.getAttribute('cy')



    // const r = e.target.getAttribute('r')
    console.log(`${e.x}`)
    console.log(`${e.y}`)
    console.log(`${d3.pointer(e)[0]}`)
    console.log(`${d3.pointer(e)[1]}`)
    console.log(this.parentNode)
    // append the rect first so the rect background won't obscure the text
    // let rectBackground=d3.select(this.parentNode).append('rect').attr('id','toolTip-background')

        // append the text then tspan
    // let textContainer = d3.select('#toolTip-background').append('text')
    // let textContainer = d3.select(this.parentNode).append('text')
    // .attr('id','toolTip-text')
    // .style('font-size','0.5em')
    // .style('font-family', 'sans-serif')
    // .style('fill','black')
    // .attr('x',d3.pointer(e)[0])
    // .attr('y',d3.pointer(e)[1]) 
    // .text(`Number of staff: ${d.value}`)

    let textContainer = d3.select(this.parentNode)
            .append('xhtml:div')
            .attr('class','leaf-tooltips')
            .attr('height',30)
            .attr('width',100)
            // .style('background-color','white')
            .append('text')
            .text(d=>d.value)
    // if (r < 18) {
    //   textContainer.append('tspan')
    //   .text(d.id)
    //   .attr('x',d3.pointer(e)[0])
    //   .attr("text-anchor", "start")

    // textContainer.append('tspan').attr('class','staff-number')
    //   .text(`Number of staff: ${d.value}`)
    // //   .style("font-weight", "bold") 
    //   .attr('x',d3.pointer(e)[0])
    //   .attr("text-anchor", "start")
    //   .attr('dy','1.2em')
    // } else {
    // textContainer.append('tspan').attr('class','staff-number')
    //   .text(`Number of staff: ${d.value}`)
    // //   .style("font-weight", "bold") 
    //   .attr('x',d3.pointer(e)[0])
    //   .attr("text-anchor", "start")

    // }


    //get the dimension of the rect-background based on the space text takes on
    // let text = this.parentNode.querySelector('text');
    // let box = text.getBBox();
    // rectBackground
    // .attr('x',d3.pointer(e)[0])
    // .attr('y',d3.pointer(e)[1]- box.height) 
    //   .attr("width", box.width + 0.35)
    //   .attr("height", box.height + 0.7)
    //   .style("fill","white")
    //   .attr('fill-opacity',1)
}

export function handleTooltips () {
    d3.selectAll('.leaf-label')
    .on('mouseenter',showTooltips)
    // .on('mouseleave',hideTooltips)
    // .on('dblclick',showHyperlink)

}