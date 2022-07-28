import { component, PrefabReference } from '@betty-blocks/component-sdk';
import { Configuration } from '../Configuration';
import { options as defaults } from './options';

export const CardContent = (
  config: Configuration,
  descendants: PrefabReference[] = [],
) => {
  const options = { ...(config.options || defaults) };
  const style = { ...config.style };
  const ref = config.ref ? { ...config.ref } : undefined;
  const label = config.label ? config.label : undefined;
  return component('CardContent', { options, style, ref, label }, descendants);
};
