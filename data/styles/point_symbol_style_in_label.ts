import { Style } from 'geostyler-style';

const pointSymbolStyle: Style = [
  {
    name: 'point_symbol_style_in_label',
    rules: [
      {
        name: '',
        scaleDenominator: { max: 35000 },
        symbolizers: [
          { kind: 'Icon', image: 'simple_point_1_symbol.svg' },
          { kind: 'Icon', image: 'simple_point_2_symbol.svg' },
          {
            kind: 'Text',
            label: '{{ref}}',
            font: ['ptsansbold'],
            size: 6.644432194046306,
            color: '#ffffff'
          }
        ]
      },
      {
        name: '',
        scaleDenominator: { max: 25000 },
        symbolizers: [
          { kind: 'Icon', image: 'simple_point_2_symbol.svg' },
          {
            kind: 'Text',
            label: '{{ref}}',
            font: ['ptsansbold'],
            size: 5.644432194046306,
            color: '#ffffff'
          }
        ]
      },
      {
        name: '',
        scaleDenominator: { max: 20000 },
        symbolizers: [
          { kind: 'Icon', image: 'simple_point_3_symbol.svg' },
          {
            kind: 'Text',
            label: '{{ref}}',
            font: ['ptsansbold'],
            size: 4.644432194046306,
            color: '#ffffff'
          }
        ]
      }
    ]
  }
];
export default pointSymbolStyle;
