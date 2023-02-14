var wms_layers = [];

var format_Unidadvecinal_0 = new ol.format.GeoJSON();
var features_Unidadvecinal_0 = format_Unidadvecinal_0.readFeatures(json_Unidadvecinal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidadvecinal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidadvecinal_0.addFeatures(features_Unidadvecinal_0);
var lyr_Unidadvecinal_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Unidadvecinal_0, 
                style: style_Unidadvecinal_0,
                interactive: false,
                title: '<img src="styles/legend/Unidadvecinal_0.png" /> Unidad vecinal'
            });
var format_Distritomunicipal_1 = new ol.format.GeoJSON();
var features_Distritomunicipal_1 = format_Distritomunicipal_1.readFeatures(json_Distritomunicipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritomunicipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritomunicipal_1.addFeatures(features_Distritomunicipal_1);
var lyr_Distritomunicipal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritomunicipal_1, 
                style: style_Distritomunicipal_1,
                interactive: false,
                title: '<img src="styles/legend/Distritomunicipal_1.png" /> Distrito municipal'
            });
var format_Centrodesalud_2 = new ol.format.GeoJSON();
var features_Centrodesalud_2 = format_Centrodesalud_2.readFeatures(json_Centrodesalud_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrodesalud_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrodesalud_2.addFeatures(features_Centrodesalud_2);
var lyr_Centrodesalud_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrodesalud_2, 
                style: style_Centrodesalud_2,
                interactive: true,
                title: '<img src="styles/legend/Centrodesalud_2.png" /> Centro de salud'
            });
var group_REDESDESALUD = new ol.layer.Group({
                                layers: [lyr_Centrodesalud_2,],
                                title: "REDES DE SALUD"});
var group_REFERENCIAS = new ol.layer.Group({
                                layers: [lyr_Unidadvecinal_0,lyr_Distritomunicipal_1,],
                                title: "REFERENCIAS"});

lyr_Unidadvecinal_0.setVisible(true);lyr_Distritomunicipal_1.setVisible(true);lyr_Centrodesalud_2.setVisible(true);
var layersList = [group_REFERENCIAS,group_REDESDESALUD];
lyr_Unidadvecinal_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'dm': 'dm', 'uv': 'uv', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_Distritomunicipal_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'dm': 'dm', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_Centrodesalud_2.set('fieldAliases', {'fid': 'fid', 'N': 'N', 'centro_salud': 'centro_salud', 'RED': 'RED', });
lyr_Unidadvecinal_0.set('fieldImages', {'fid': '', 'id': 'Range', 'dm': 'TextEdit', 'uv': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_Distritomunicipal_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'dm': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_Centrodesalud_2.set('fieldImages', {'fid': '', 'N': 'Range', 'centro_salud': 'TextEdit', 'RED': 'TextEdit', });
lyr_Unidadvecinal_0.set('fieldLabels', {});
lyr_Distritomunicipal_1.set('fieldLabels', {});
lyr_Centrodesalud_2.set('fieldLabels', {});
lyr_Centrodesalud_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});