// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="220" height="35" viewBox="0 0 180 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
          fill={theme.palette.primary.dark}
        />
        <path
          d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
          fill={theme.palette.primary.main}
        />
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="120.000000pt" height="30.000000pt" viewBox="0 0 130.000000 68.000000"
        preserveAspectRatio="xMidYMid meet">
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g transform="translate(0.000000,68.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M144 504 c-79 -39 -95 -192 -27 -256 20 -19 36 -23 90 -23 62 0 66 2
            99 37 34 38 40 60 34 138 -7 99 -103 150 -196 104z m134 -50 c17 -20 22 -37
            22 -84 0 -78 -26 -112 -89 -114 -62 -1 -91 34 -91 112 0 62 17 97 54 112 32
            14 79 3 104 -26z"/>
          <path d="M410 370 c0 -143 1 -150 20 -150 18 0 20 7 20 65 l0 65 55 0 c49 0
            60 6 53 27 -2 3 -27 5 -55 4 l-53 -2 0 55 0 56 60 0 c47 0 60 3 60 15 0 12
            -16 15 -80 15 l-80 0 0 -150z"/>
          <path d="M694 506 c-43 -19 -74 -66 -80 -123 -13 -117 96 -193 215 -152 31 11
            31 12 31 80 l0 69 -60 0 c-51 0 -60 -3 -60 -18 0 -14 7 -17 40 -14 l40 4 0
            -45 c0 -43 -1 -45 -35 -51 -106 -20 -175 115 -99 195 35 36 72 44 119 25 47
            -20 55 -20 55 0 0 19 -59 44 -102 44 -18 -1 -47 -7 -64 -14z"/>
          <path d="M1410 500 c0 -15 7 -20 25 -20 18 0 25 5 25 20 0 15 -7 20 -25 20
            -18 0 -25 -5 -25 -20z"/>
          <path d="M958 424 c-51 -27 -63 -139 -18 -179 39 -36 160 -28 160 11 0 12 -5
            15 -22 9 -57 -18 -86 -17 -107 4 -39 39 -28 50 57 53 l77 3 -2 35 c-3 67 -79
            100 -145 64z m96 -36 c9 -12 16 -26 16 -30 0 -5 -27 -8 -60 -8 -64 0 -72 8
            -40 40 27 27 65 26 84 -2z"/>
          <path d="M1170 330 c0 -105 1 -110 21 -110 19 0 21 5 18 74 -4 78 5 100 43
            112 12 3 27 -1 39 -12 16 -14 19 -31 19 -96 0 -71 2 -78 20 -78 18 0 20 7 20
            85 0 78 -2 88 -25 110 -28 29 -70 32 -103 9 -20 -14 -22 -14 -22 0 0 9 -7 16
            -15 16 -12 0 -15 -19 -15 -110z"/>
          <path d="M1420 330 c0 -103 1 -110 20 -110 19 0 20 7 20 110 0 103 -1 110 -20
            110 -19 0 -20 -7 -20 -110z"/>
          <path d="M1526 348 c3 -81 6 -95 25 -110 26 -22 67 -23 97 -2 20 14 22 14 22
            0 0 -9 9 -16 20 -16 19 0 20 7 20 110 0 103 -1 110 -20 110 -18 0 -20 -7 -20
            -74 0 -69 -2 -76 -26 -95 -32 -25 -34 -25 -60 -7 -16 12 -19 27 -19 95 0 76
            -1 81 -21 81 -21 0 -21 -4 -18 -92z"/>
          <path d="M1798 430 c-53 -32 -41 -81 28 -111 30 -14 44 -26 44 -39 0 -25 -42
            -37 -76 -21 -33 15 -34 14 -34 -9 0 -37 99 -40 135 -4 30 31 15 66 -40 95 -27
            14 -51 33 -53 41 -4 21 29 32 69 23 26 -6 30 -4 27 12 -2 13 -13 19 -43 20
            -22 2 -48 -2 -57 -7z"/>
        </g>
      </svg>
        <defs>
          <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
    </>
  );
};

export default Logo;
