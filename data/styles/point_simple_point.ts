import { Style } from 'geostyler-style';

const pointStyle: Style = {
  name: 'point_simple_point',
  rules: [
  {
    name: '',
    symbolizers: [{
      kind: 'Mark',
      fillOpacity: 1,
      wellKnownName: 'Circle',
      color: '#00FF00',
      radius: 7.5,
      rotate: 0,
    }]
  }]
}

export default pointStyle;
