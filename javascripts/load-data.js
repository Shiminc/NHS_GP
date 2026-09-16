import {csvToHierarchy} from './tranform-data.js';
import {drawCirclePack} from './circle-pack.js';
// import {handleTooltips} from './tooltips.js';
import {drawTreeMap} from './tree-map.js';
import {drawIcicle} from './icicle-chart.js';

function dataConverter (data) {
  data.forEach(d=> {
  d.staff_numbers = +d.staff_numbers;
  })
  return data;
} 


d3.csv("./data/workforce_hierarchy.csv")
.then(data => {
  const dataset = dataConverter(data)
  // console.table(dataset)
  const [root, descendants, leaves] = csvToHierarchy(dataset);
  // console.log(root);
  // console.log(descendants)
  // console.log('leaves')
  // console.log(leaves)
  
  drawCirclePack(root, descendants, leaves);
  drawTreeMap(root, descendants, leaves);
  drawIcicle(root, descendants, leaves)
  // handleTooltips()  

})
.catch(error => console.log(error));


