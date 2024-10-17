var wms_layers = [];


        var lyr_ESRITerrain_0 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_india_administrative_state_boundary_1 = new ol.format.GeoJSON();
var features_india_administrative_state_boundary_1 = format_india_administrative_state_boundary_1.readFeatures(json_india_administrative_state_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_administrative_state_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_administrative_state_boundary_1.addFeatures(features_india_administrative_state_boundary_1);
var lyr_india_administrative_state_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_administrative_state_boundary_1, 
                style: style_india_administrative_state_boundary_1,
                popuplayertitle: "india_administrative_state_boundary",
                interactive: true,
                title: '<img src="styles/legend/india_administrative_state_boundary_1.png" /> india_administrative_state_boundary'
            });
var format_gis_osm_railways_free_1_2 = new ol.format.GeoJSON();
var features_gis_osm_railways_free_1_2 = format_gis_osm_railways_free_1_2.readFeatures(json_gis_osm_railways_free_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_railways_free_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_railways_free_1_2.addFeatures(features_gis_osm_railways_free_1_2);
var lyr_gis_osm_railways_free_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_railways_free_1_2, 
                style: style_gis_osm_railways_free_1_2,
                popuplayertitle: "gis_osm_railways_free_1",
                interactive: true,
                title: '<img src="styles/legend/gis_osm_railways_free_1_2.png" /> gis_osm_railways_free_1'
            });

lyr_ESRITerrain_0.setVisible(true);lyr_india_administrative_state_boundary_1.setVisible(true);lyr_gis_osm_railways_free_1_2.setVisible(true);
var layersList = [lyr_ESRITerrain_0,lyr_india_administrative_state_boundary_1,lyr_gis_osm_railways_free_1_2];
lyr_india_administrative_state_boundary_1.set('fieldAliases', {'gid': 'gid', 'st_nm': 'st_nm', 'tid': 'tid', 'territory_': 'territory_', });
lyr_gis_osm_railways_free_1_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_india_administrative_state_boundary_1.set('fieldImages', {'gid': 'Range', 'st_nm': 'TextEdit', 'tid': 'TextEdit', 'territory_': 'TextEdit', });
lyr_gis_osm_railways_free_1_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_india_administrative_state_boundary_1.set('fieldLabels', {'gid': 'no label', 'st_nm': 'inline label - visible with data', 'tid': 'no label', 'territory_': 'no label', });
lyr_gis_osm_railways_free_1_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'hidden field', 'fclass': 'inline label - visible with data', 'name': 'no label', });
lyr_gis_osm_railways_free_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});