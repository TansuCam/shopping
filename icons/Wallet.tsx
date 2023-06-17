import * as React from "react";
const SvgWallet = (props: any) => (
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
      d="M36.205 15.117a3.016 3.016 0 0 1 3.845 2.9v2.526h3.016a3.017 3.017 0 0 1 3.017 3.016v18.1a3.017 3.017 0 0 1-3.017 3.016H18.934a3.017 3.017 0 0 1-3.017-3.017h.04a3.013 3.013 0 0 1-.04-.491V23.188c0-1.346.893-2.53 2.188-2.9l18.1-5.171Zm-8.01 26.541h14.871V23.56H40.05v3.017h3.016v3.016H40.05v6.404c0 1.347-.893 2.53-2.188 2.9l-9.667 2.762Zm-9.261-18.47v17.979l18.099-5.171V18.017l-18.1 5.172Zm15.083 3.388a1.508 1.508 0 1 1-3.017 0 1.508 1.508 0 0 1 3.017 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWallet;
