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
    color: 'rgba(0, 184, 217, 1)',
    color07: 'rgba(0, 184, 217, 0.7)',
    color04: 'rgba(0, 184, 217, 0.4)',
    color01: 'rgba(0, 184, 217, 0.1)',
    type:"white",
    isFixed: true },
  { 
    value: 'running',
    label: 'running',
    color: 'rgba(0, 82, 204, 1)',
    color07: 'rgba(0, 82, 204, 0.7)',
    color04: 'rgba(0, 82, 204, 0.4)',
    color01: 'rgba(0, 82, 204, 0.1)',
    type:"white",
    isFixed: true
  },
  { 
    value: 'cycling', 
    label: 'cycling', 
    type:"white", 
    color: 'rgba(82, 67, 170, 1)',
    color07: 'rgba(82, 67, 170, 0.7)',
    color04: 'rgba(82, 67, 170, 0.4)',
    color01: 'rgba(82, 67, 170, 0.1)',
  },
  { 
    value: 'swimming',
    label: 'swimming',
    color: 'rgba(255, 86, 48, 1)',
    color07: 'rgba(255, 86, 48, 0.7)',
    color04: 'rgba(255, 86, 48, 0.4)',
    color01: 'rgba(255, 86, 48, 0.1)',
    type:"white",
    isFixed: true
  },
];
