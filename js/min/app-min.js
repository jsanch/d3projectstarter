function zoom(){circle.attr("transform",transform)}function transform(t){return"translate("+x(t[0])+","+y(t[1])+")"}console.log("Jaime D3 Starter Template");var width=500,height=500,randomX=d3.random.normal(width/2,80),randomY=d3.random.normal(height/2,80),data=d3.range(2e3).map(function(){return[randomX(),randomY()]}),x=d3.scale.linear().domain([0,width]).range([0,width]),y=d3.scale.linear().domain([0,height]).range([height,0]),svg=d3.select("svg").attr("width",width).attr("height",height).append("g").call(d3.behavior.zoom().x(x).y(y).scaleExtent([1,8]).on("zoom",zoom));console.log("hello"),svg.append("rect").attr("class","overlay").attr("width",width).attr("height",height);var circle=svg.selectAll("circle").data(data).enter().append("circle").attr("r",2.5).attr("transform",transform);