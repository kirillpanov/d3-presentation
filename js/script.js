(function() {
    let dataArray = [1.9741, 1.9760, 1.9774, 1.9806, 1.9855, 1.9855, 1.9855, 1.9855, 1.9908, 1.9915, 1.9921, 1.9921, 1.9921, 1.9932, 1.9976, 2.0057, 2.0068, 2.0050, 2.0050, 2.0050];

    const height = 500,
          width = 500,
          scaling = 10000,
          rectangleWidth = 20,
          rectangleMargin = 5;

    let infoBar =  d3.select("body")
                     .append("div")
                     .attr('class','infoBar')
                     .text('Hello visualization!');

    let svgContainer = d3.select('body')
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height)
                        .attr('class', 'svgContainer')
                        .append('g');

    let rectangleHeight = function(elem) {
        return ( elem - d3.min(dataArray) ) * scaling
    };

    let rectangle = svgContainer.selectAll('rect')
                                .data(dataArray)
                                .enter()
                                .append('rect')
                                .attr('class', 'rectangle')
                                .attr('height', d => rectangleHeight(d))
                                .attr('width', rectangleWidth)
                                .attr('x', (d,index) => index * (rectangleWidth + rectangleMargin))
                                .attr('y', d => height - rectangleHeight(d) )
                                .on("mouseover",  d => infoBar.text(d + ' BYN for 1 USD'))
                                .on("mouseout", () => infoBar.text('Hello visualization!'));
})();