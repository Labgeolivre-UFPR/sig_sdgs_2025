var wms_layers = [];

var format_UsodeSoloparaAgricultura2015_0 = new ol.format.GeoJSON();
var features_UsodeSoloparaAgricultura2015_0 = format_UsodeSoloparaAgricultura2015_0.readFeatures(json_UsodeSoloparaAgricultura2015_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsodeSoloparaAgricultura2015_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodeSoloparaAgricultura2015_0.addFeatures(features_UsodeSoloparaAgricultura2015_0);
var lyr_UsodeSoloparaAgricultura2015_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsodeSoloparaAgricultura2015_0, 
                style: style_UsodeSoloparaAgricultura2015_0,
                popuplayertitle: 'Uso de Solo para Agricultura (2015)',
                interactive: false,
                title: '<img src="styles/legend/UsodeSoloparaAgricultura2015_0.png" /> Uso de Solo para Agricultura (2015)'
            });
var format_FocodeIncndio2015_1 = new ol.format.GeoJSON();
var features_FocodeIncndio2015_1 = format_FocodeIncndio2015_1.readFeatures(json_FocodeIncndio2015_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FocodeIncndio2015_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FocodeIncndio2015_1.addFeatures(features_FocodeIncndio2015_1);
var lyr_FocodeIncndio2015_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FocodeIncndio2015_1, 
                style: style_FocodeIncndio2015_1,
                popuplayertitle: 'Foco de Incêndio (2015)',
                interactive: false,
                title: '<img src="styles/legend/FocodeIncndio2015_1.png" /> Foco de Incêndio (2015)'
            });
var format_UsodeSoloparaAgricultura2024_2 = new ol.format.GeoJSON();
var features_UsodeSoloparaAgricultura2024_2 = format_UsodeSoloparaAgricultura2024_2.readFeatures(json_UsodeSoloparaAgricultura2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsodeSoloparaAgricultura2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodeSoloparaAgricultura2024_2.addFeatures(features_UsodeSoloparaAgricultura2024_2);
var lyr_UsodeSoloparaAgricultura2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsodeSoloparaAgricultura2024_2, 
                style: style_UsodeSoloparaAgricultura2024_2,
                popuplayertitle: 'Uso de Solo para Agricultura (2024)',
                interactive: false,
                title: '<img src="styles/legend/UsodeSoloparaAgricultura2024_2.png" /> Uso de Solo para Agricultura (2024)'
            });
var format_FocodeIncndio2024_3 = new ol.format.GeoJSON();
var features_FocodeIncndio2024_3 = format_FocodeIncndio2024_3.readFeatures(json_FocodeIncndio2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FocodeIncndio2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FocodeIncndio2024_3.addFeatures(features_FocodeIncndio2024_3);
var lyr_FocodeIncndio2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FocodeIncndio2024_3, 
                style: style_FocodeIncndio2024_3,
                popuplayertitle: 'Foco de Incêndio (2024)',
                interactive: false,
                title: '<img src="styles/legend/FocodeIncndio2024_3.png" /> Foco de Incêndio (2024)'
            });
var format_RegiaoGeograficadeCuritibaIBGE_4 = new ol.format.GeoJSON();
var features_RegiaoGeograficadeCuritibaIBGE_4 = format_RegiaoGeograficadeCuritibaIBGE_4.readFeatures(json_RegiaoGeograficadeCuritibaIBGE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegiaoGeograficadeCuritibaIBGE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegiaoGeograficadeCuritibaIBGE_4.addFeatures(features_RegiaoGeograficadeCuritibaIBGE_4);
var lyr_RegiaoGeograficadeCuritibaIBGE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegiaoGeograficadeCuritibaIBGE_4, 
                style: style_RegiaoGeograficadeCuritibaIBGE_4,
                popuplayertitle: 'Regiao Geografica de Curitiba (IBGE)',
                interactive: false,
                title: '<img src="styles/legend/RegiaoGeograficadeCuritibaIBGE_4.png" /> Regiao Geografica de Curitiba (IBGE)'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_UsodeSoloparaAgricultura2024_2,lyr_FocodeIncndio2024_3,],
                                fold: 'open',
                                title: '2024'});
var group_2015 = new ol.layer.Group({
                                layers: [lyr_UsodeSoloparaAgricultura2015_0,lyr_FocodeIncndio2015_1,],
                                fold: 'open',
                                title: '2015'});

lyr_UsodeSoloparaAgricultura2015_0.setVisible(true);lyr_FocodeIncndio2015_1.setVisible(true);lyr_UsodeSoloparaAgricultura2024_2.setVisible(true);lyr_FocodeIncndio2024_3.setVisible(true);lyr_RegiaoGeograficadeCuritibaIBGE_4.setVisible(true);
var layersList = [group_2015,group_2024,lyr_RegiaoGeograficadeCuritibaIBGE_4];
lyr_UsodeSoloparaAgricultura2015_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'area': 'area', });
lyr_FocodeIncndio2015_1.set('fieldAliases', {'fid': 'fid', 'VALUE': 'VALUE', });
lyr_UsodeSoloparaAgricultura2024_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FocodeIncndio2024_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_RegiaoGeograficadeCuritibaIBGE_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOME': 'NOME', 'CD_GEOCODI': 'CD_GEOCODI', 'UF': 'UF', 'rgi': 'rgi', 'nome_rgi': 'nome_rgi', 'rgint': 'rgint', 'nome_rgint': 'nome_rgint', });
lyr_UsodeSoloparaAgricultura2015_0.set('fieldImages', {'fid': '', 'DN': '', 'area': '', });
lyr_FocodeIncndio2015_1.set('fieldImages', {'fid': '', 'VALUE': '', });
lyr_UsodeSoloparaAgricultura2024_2.set('fieldImages', {'fid': '', 'DN': '', });
lyr_FocodeIncndio2024_3.set('fieldImages', {'fid': '', 'id': '', });
lyr_RegiaoGeograficadeCuritibaIBGE_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'NOME': 'TextEdit', 'CD_GEOCODI': 'TextEdit', 'UF': 'TextEdit', 'rgi': 'TextEdit', 'nome_rgi': 'TextEdit', 'rgint': 'TextEdit', 'nome_rgint': 'TextEdit', });
lyr_UsodeSoloparaAgricultura2015_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'area': 'no label', });
lyr_FocodeIncndio2015_1.set('fieldLabels', {'fid': 'no label', 'VALUE': 'no label', });
lyr_UsodeSoloparaAgricultura2024_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_FocodeIncndio2024_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_RegiaoGeograficadeCuritibaIBGE_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOME': 'no label', 'CD_GEOCODI': 'no label', 'UF': 'no label', 'rgi': 'no label', 'nome_rgi': 'no label', 'rgint': 'no label', 'nome_rgint': 'no label', });
lyr_RegiaoGeograficadeCuritibaIBGE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});