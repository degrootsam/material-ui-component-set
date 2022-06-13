import {
  toggle,
  text,
  showIfTrue,
  color,
  ThemeColor,
  option,
} from '@betty-blocks/component-sdk';

export const styles = {
  styles: toggle('Styles', { value: false }),
  titleSize: text('Title Font Size', {
    value: '1rem',
    configuration: {
      as: 'UNIT',
      condition: showIfTrue('styles'),
    },
  }),
  titleColor: color('Title color', {
    value: ThemeColor.BLACK,
    configuration: {
      condition: showIfTrue('styles'),
    },
  }),
  titleWeight: option('CUSTOM', {
    label: 'Title Font weight',
    value: '400',
    configuration: {
      as: 'DROPDOWN',
      dataType: 'string',
      allowedInput: [
        { name: '100', value: '100' },
        { name: '200', value: '200' },
        { name: '300', value: '300' },
        { name: '400', value: '400' },
        { name: '500', value: '500' },
        { name: '600', value: '600' },
        { name: '700', value: '700' },
        { name: '800', value: '800' },
        { name: '900', value: '900' },
      ],
      condition: showIfTrue('styles'),
    },
  }),
  subtitleSize: text('Subtitle Font Size', {
    value: '0.875rem',
    configuration: {
      as: 'UNIT',
      condition: showIfTrue('styles'),
    },
  }),
  subtitleColor: color('Subtitle color', {
    value: ThemeColor.SECONDARY,
    configuration: {
      condition: {
        type: 'SHOW',
        option: 'styles',
        comparator: 'EQ',
        value: true,
      },
    },
  }),
  subtitleWeight: option('CUSTOM', {
    label: 'Subtitle Font weight',
    value: '400',
    configuration: {
      as: 'DROPDOWN',
      dataType: 'string',
      allowedInput: [
        { name: '100', value: '100' },
        { name: '200', value: '200' },
        { name: '300', value: '300' },
        { name: '400', value: '400' },
        { name: '500', value: '500' },
        { name: '600', value: '600' },
        { name: '700', value: '700' },
        { name: '800', value: '800' },
        { name: '900', value: '900' },
      ],
      condition: showIfTrue('styles'),
    },
  }),
};
