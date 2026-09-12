export const roleColor = [
    {'role':'Other professionally qualified clinical staff','color': '#003f5c'},
    {'role':'HCHS doctors','color': '#78a50a'},
    {'role':'Support to clinical staff','color': '#7a4f99'},
    {'role':'NHS infrastructure support','color': '#ef527a'},	
    {'role':'Unknown classification','color': '#ffa600'},				

]

export const colorScale = d3.scaleOrdinal()
    .domain(roleColor.map(d=>d.role))
    .range(roleColor.map(d=>d.color))