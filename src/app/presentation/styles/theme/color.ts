export type AlphaVariations =
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9;
export type GreyscaleVariations =
  | "100"
  | "200"
  | "300"
  | "400"
  | "black"
  | "white";

export type ColorGreyscale = {
  [key in GreyscaleVariations]: string;
};

export type SystemColor = {
  primary: {
    default: string;
    washed: string;
  };
  secondary: {
    default: string;
    washed: string;
  };
  background: {
    default: string;
  };
};

export type StatusColor = {
  red: {
    default: string;
    washed: string;
  };
  green: {
    default: string;
    washed: string;
  };
  yellow: {
    default: string;
    washed: string;
  };
  orange: {
    default: string;
    washed: string;
  };
};

export type Lighten = (amount: AlphaVariations, color: string) => string;

export type ColorDefaultProps = {
  lighten: Lighten;
  system: SystemColor;
  status: StatusColor;
  greyscale: ColorGreyscale;
};

export const lighten: Lighten = (amount, color) => {
  return color.replace(/[^,]+(?=\))/, `${amount}`);
};

export const color: ColorDefaultProps = {
  lighten,
  system: {
    primary: {
      default: "#f5d750",
      washed: "hsla(49,100%,50%,0.1)",
    },
    secondary: {
      default: "#1a1a1a",
      washed: "hsla(221,100%,19%,0.1)",
    },
    background: {
      default: "#ffffff",
    },
  },
  status: {
    red: {
      default: "hsla(346,100%,44%,1)",
      washed: "hsla(346,100%,44%,0.1)",
    },
    green: {
      default: "hsla(140,100%,25%,1)",
      washed: "hsla(140,100%,25%,0.1)",
    },
    yellow: {
      default: "hsla(49,100%,50%,1)",
      washed: "hsla(49,100%,50%,0.1)",
    },
    orange: {
      default: "hsla(29,100%,45%,1)",
      washed: "hsla(29,100%,45%,0.1)",
    },
  },
  greyscale: {
    black: "hsla(0,0%,0%,1)",
    white: "hsla(0,0%,100%,1)",
    400: "hsla(0,0%,35%,1)",
    300: "hsla(0,0%,55%,1)",
    200: "hsla(0,0%,75%,1)",
    100: "hsla(0,0%,95%,1)",
  },
};
