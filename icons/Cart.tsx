import * as React from "react";
const SvgCart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 62 62"
    {...props}
  >
    <circle cx={31} cy={31} r={31} fill="#C3ECEA" />
    <circle cx={31.5} cy={30.5} r={27.5} stroke="#349590" strokeWidth={3} />
    <path
      fill="#349590"
      fillRule="evenodd"
      d="M23.342 20.12c-.277-.001-.543.03-.797.09-.347-.766-.806-1.453-1.328-1.975C20.331 17.35 18.934 17 17 17v3.116c1.181 0 1.861.17 2.014.322.589.589 1.102 1.785 1.102 2.793l.015.22 1.526 10.685c-2.553.133-4.532 2.116-4.655 4.595L17 40.366c.15 2.561 2.123 4.53 4.585 4.67l.354.001a4.675 4.675 0 0 0 8.815.002H34.4a4.675 4.675 0 0 0 9.08-1.557 4.673 4.673 0 0 0-9.08-1.558h-3.647a4.675 4.675 0 0 0-8.815 0h-.266c-.794-.048-1.507-.76-1.56-1.651l.003-1.465c.041-.808.75-1.515 1.634-1.56l3.076.002h15.722l.23-.072a4.09 4.09 0 0 0 2.574-2.416l.165-.325.533-1.056c.551-1.093 1.103-2.189 1.64-3.259 1.317-2.621 2.145-4.287 2.329-4.696.941-2.1-.966-3.718-2.916-3.752l-21.761-1.555Zm16.665 14.015H24.965a.265.265 0 0 1-.192-.218l-1.526-10.685 21.626 1.549c-.378.771-1.066 2.15-1.966 3.943l-.023.045c-.514 1.023-1.065 2.117-1.616 3.209l-.532 1.055-.202.4-.076.176a.973.973 0 0 1-.45.526ZM38.808 45.04a1.558 1.558 0 1 0 0-3.115 1.558 1.558 0 0 0 0 3.115Zm-10.904-1.557a1.558 1.558 0 1 1-3.116 0 1.558 1.558 0 0 1 3.116 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCart;
