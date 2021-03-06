console.log("Jaime D3 Starter Template");

var width = 500,
    height = 500;

var randomX = d3.random.normal(width / 2, 80),
    randomY = d3.random.normal(height / 2, 80);

var data = d3.range(2000).map(function() {
  return [
    randomX(),
    randomY()
  ];
});

var x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

var svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 8]).on("zoom", zoom));

console.log("hello");

svg.append("rect")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height);

var circle = svg.selectAll("circle")
    .data(data)
  .enter().append("circle")
    .attr("r", 2.5)
    .attr("transform", transform);

function zoom() {
  circle.attr("transform", transform);
}

function transform(d) {
  return "translate(" + x(d[0]) + "," + y(d[1]) + ")";
}