var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TOPONIMI_PT_50K_1 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_50K_1 = format_TOPONIMI_PT_50K_1.readFeatures(json_TOPONIMI_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_50K_1.addFeatures(features_TOPONIMI_PT_50K_1);
var lyr_TOPONIMI_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_50K_1, 
                style: style_TOPONIMI_PT_50K_1,
                popuplayertitle: 'TOPONIMI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_50K_1.png" /> TOPONIMI_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TOPONIMI_PT_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TOPONIMI_PT_50K_1];
lyr_TOPONIMI_PT_50K_1.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_TOPONIMI_PT_50K_1.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'ALIAS': '', 'LOKTPN': '', 'REMARK': '', 'KLSTPN': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FTYPE': '', 'LAT': '', 'LON': '', 'KOORDY': '', 'KOORDX': '', 'KOORDINAT1': '', 'KORDINTAT2': '', 'LUAS': '', 'Elevasi': '', 'NAMLOK': '', 'NAMSPE': '', 'NAMMAP': '', 'NAMGAZ': '', 'SJHNAM': '', 'ARTINAM': '', 'ASLBHS': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'STATUS': '', });
lyr_TOPONIMI_PT_50K_1.set('fieldLabels', {'FCODE': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'ALIAS': 'inline label - visible with data', 'LOKTPN': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'KLSTPN': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'FTYPE': 'inline label - visible with data', 'LAT': 'inline label - visible with data', 'LON': 'inline label - visible with data', 'KOORDY': 'inline label - visible with data', 'KOORDX': 'inline label - visible with data', 'KOORDINAT1': 'inline label - visible with data', 'KORDINTAT2': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'Elevasi': 'inline label - visible with data', 'NAMLOK': 'inline label - visible with data', 'NAMSPE': 'inline label - visible with data', 'NAMMAP': 'inline label - visible with data', 'NAMGAZ': 'inline label - visible with data', 'SJHNAM': 'inline label - visible with data', 'ARTINAM': 'inline label - visible with data', 'ASLBHS': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', });
lyr_TOPONIMI_PT_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});