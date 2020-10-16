import { Style } from 'geostyler-style';

const pointStyle: Style = {
  name: 'point_simple_rgb_to_hex',
  rules: [
  {
    name: 'Test point',
    symbolizers: [{
      kind: 'Mark',
      fillOpacity: 1,
      wellKnownName: 'Circle',
      color: '#00FF00',
      radius: 7.5
    }]
  }]
}

export default pointStyle;
