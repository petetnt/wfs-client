/*
** Module dependencies
*/
const xml = require('../xml');

const ns = {
  wfs: 'http://www.opengis.net/wfs',
  ogc: 'http://www.opengis.net/ogc',
  ows: 'http://www.opengis.net/ows',
};

const types = {

  Main: {
    './ows:ServiceIdentification': { dest: 'service', type: 'ServiceIdentification' },
    // './ows:ServiceProvider': {},
    // './ows:OperationsMetadata': { dest: 'capabilities', custom: true },
    './wfs:FeatureTypeList/wfs:FeatureType': { dest: 'featureTypes', multi: true, type: 'FeatureType' },
    // 'ogc:Filter_Capabilities': {}
  },

  ServiceIdentification: {
    './ows:Title': 'title',
    './ows:Abstract': 'abstract',
    './ows:Keywords/ows:Keyword': { dest: 'keywords', multi: true },
    './ows:ServiceType': 'serviceType',
    './ows:ServiceTypeVersion': 'serviceTypeVersion',
    './ows:Fees': 'fees',
    './ows:AccessConstraints': 'accessConstraints',
  },

  FeatureType: {
    './wfs:Name': 'name',
    './wfs:Title': 'title',
    './wfs:Abstract': 'abstract',
    './ows:Keywords/ows:Keyword': { dest: 'keywords', multi: true },
    // './wfs:DefaultSRS': {},
    // './wfs:WGS84BoundingBox': {}
  },

};

exports.parseCapabilities = function(xmlDoc) {
  const mapper = xml.mapper(types, ns);
  return mapper.buildObject(xmlDoc, 'Main');
};
