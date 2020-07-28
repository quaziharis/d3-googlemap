import * as d3 from 'd3'
looker.plugins.visualizations.add({
create: function(element, config){
element.innerHTML = "<h1>Ready to render!</h1>";
},
updateAsync: function(data, element, config, queryResponse, details, doneRendering){
if (queryResponse.fields.dimensions.length == 0) {
this.addError({title: "No Dimensions", message: "This Map requires dimensions."});
return;
 }
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
<style>

html, body, #map {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

 svg?: any

 const svg = this.svg 
      .html('')
      .attr('width', '100%')
      .attr('height', '100%')
      .append('g')


svg. circle {
  fill: brown;
  stroke: black;
  stroke-width: 1.5px;
}

</style>
<div id="map"></div>
<script src="https://maps.google.com/maps/api/js?sensor=true"></script>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script>

// Create the Google Map…
var map = new google.maps.Map(d3.select("#map").node(), {
  zoom: 8,
  center: new google.maps.LatLng(37.76487, -122.41948),
  mapTypeId: google.maps.MapTypeId.TERRAIN
});

// Load the station data. When the data comes back, create an overlay.
const dimensions = queryResponse.fields.dimension_like
const measure = queryResponse.fields.measure_like[0]{
data.forEach(function (d: any) {
// variable number of dimensions
const path: any[] = []
for (const dim of dimensions) {
if (d[dim.name].value === null && !config.show_null_points) break
path.push(d[dim.name].value + '')
 }

  var overlay = new google.maps.OverlayView();

  // Add the container when the overlay is added to the map.
  overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayLayer).append("div")
        .attr("class", "stations");

    // Draw each marker as a separate SVG element.
    // We could use a single SVG, but what size would it have?
    overlay.draw = function() {
      var projection = this.getProjection(),
          padding = 10;

      var marker = layer.selectAll("svg")
          .data(d3.entries(data))
          .each(transform) // update existing markers
        .enter().append("svg")
          .each(transform)
          .attr("class", "marker");

      // Add a circle.
      marker.append("circle")
          .attr("r", 4.5)
          .attr("cx", padding)
          .attr("cy", padding);

      // Add a label.
      marker.append("text")
          .attr("x", padding + 7)
          .attr("y", padding)
          .attr("dy", ".31em")
          .text(function(d) { return d.key; });

      function transform(d) {
        d = new google.maps.LatLng(d.value[1], d.value[0]);
        d = projection.fromLatLngToDivPixel(d);
        return d3.select(this)
            .style("left", (d.x - padding) + "px")
            .style("top", (d.y - padding) + "px");
      }
    };
  };
looker.plugins.visualizations.add(vis)