import { colors } from './color';

export interface ColorOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly color07: string;
  readonly color04: string;
  readonly color01: string;
  readonly type: 'white' | 'black';
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColorOption[] = [
  { 
    value: 'walking',
    label: 'walking',
    type:"white",
    isFixed: true,
    ...colors.walking
  },
  { 
    value: 'running',
    label: 'running',
    type:"white",
    isFixed: true,
    ...colors.running,
  },
  { 
    value: 'cycling', 
    label: 'cycling', 
    type:"white", 
    ...colors.cycling,
  },
  { 
    value: 'swimming',
    label: 'swimming',
    type:"white",
    isFixed: true,
    ...colors.swimming,
  },
];
