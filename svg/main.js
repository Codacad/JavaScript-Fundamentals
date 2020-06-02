const canvas = d3.select('div.canvas');
const svg = canvas.append('svg');
svg.attr('width', 600);
svg.attr('height', 400);
svg.attr('style', "background-color:rgba(76,0,230,.5)");

svg.append('rect')
    .attr('x', 50)
    .attr('y', 50)
    .attr('width', '100px')
    .attr('height', '100px')
    .attr('style', 'fill:orange; stroke:gray; stroke-width:1px;');
svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 100)
    .attr('r', 50)   
    .attr('fill', 'rgba(100, 120, 10,.5)')
    .style("box-shadow", "0px 0px 20px rgba(0,0,0,1)");
svg.append('line')
    .attr('x1', 150)
    .attr('y1', 50+3)
    .attr('x2', 250)
    .attr('y2', 50+3)
    .attr('stroke-width', '5px')
    .attr('stroke', 'black');

svg.append('text')
    .attr('x', 50)
    .attr('y', 40)
    .attr('fill', 'white')
    .attr('style', "text-decoration:underline; font-size:30px;")
    .text('Hello, SVG')
    .style("text-shadow", "0px 0px 20px rgba(0,0,0,1)");