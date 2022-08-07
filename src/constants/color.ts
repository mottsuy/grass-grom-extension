export interface Color {
  readonly color: string;
  readonly color07: string;
  readonly color04: string;
  readonly color01: string;
}

export interface Activities {
  readonly walking: Color;
  readonly running: Color;
  readonly cycling: Color;
  readonly swimming: Color;
}


export const colors: Activities = {
  walking: {
    color: 'rgba(0, 184, 217, 1)',
    color07: 'rgba(0, 184, 217, 0.7)',
    color04: 'rgba(0, 184, 217, 0.4)',
    color01: 'rgba(0, 184, 217, 0.1)',
  },
  running: {
    color: 'rgba(0, 82, 204, 1)',
    color07: 'rgba(0, 82, 204, 0.7)',
    color04: 'rgba(0, 82, 204, 0.4)',
    color01: 'rgba(0, 82, 204, 0.1)',
  },
  cycling: {
    color: 'rgba(82, 67, 170, 1)',
    color07: 'rgba(82, 67, 170, 0.7)',
    color04: 'rgba(82, 67, 170, 0.4)',
    color01: 'rgba(82, 67, 170, 0.1)',
  },
  swimming: {
    color: 'rgba(255, 86, 48, 1)',
    color07: 'rgba(255, 86, 48, 0.7)',
    color04: 'rgba(255, 86, 48, 0.4)',
    color01: 'rgba(255, 86, 48, 0.1)',
  },
} 