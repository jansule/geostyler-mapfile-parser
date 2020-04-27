import * as fs from 'fs';
import MapfileStyleParser from './MapfileStyleParser';
import { Style } from 'geostyler-style';
import { SldStyleParser } from 'geostyler-sld-parser';

import point_simplepoint from '../data/styles/point_simplepoint';

it('MapfileStyleParser is defined', () => {
  expect(MapfileStyleParser).toBeDefined();
});

describe('MapfileStyleParser implements StyleParser', () => {
  let styleParser: MapfileStyleParser;

  beforeEach(() => {
    styleParser = new MapfileStyleParser();
  });

  describe('#readStyle', () => {
    it('is defined', () => {
      expect(styleParser.readStyle).toBeDefined();
    });

    // it('can read a MapFile PointSymbolizer', () => {
    //   expect.assertions(2);
    //   const mapfile = fs.readFileSync('./mapfiles/simple.map', 'utf8');
    //   return styleParser.readStyle(mapfile).then((geoStylerStyle: Style) => {
    //     expect(geoStylerStyle).toBeDefined();
    //     expect(geoStylerStyle).toEqual(point_simplepoint);
    //   });
    // });

    it('can translate Mapfile to SLD', async () => {
      const mapfile = fs.readFileSync('./mapfiles/simple.map', 'utf8');
      const geostylerStyle = styleParser.readStyle(mapfile);
      let sldStyleParser = new SldStyleParser();
      return sldStyleParser.writeStyle(await geostylerStyle).then((sldStyle: string) => {
        console.log(sldStyle);
      });
    });
  });

  describe('#writeStyle', () => {
    it('is defined', () => {
      expect(styleParser.writeStyle).toBeDefined();
    });
  });
});
