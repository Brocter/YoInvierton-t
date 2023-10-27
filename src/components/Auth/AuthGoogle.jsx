/* eslint-disable react/prop-types */

import React from "react";

export const AuthGoogle = (props) => {
  const { signInGoogle } = props;

  return (
    <button
      className="border border-primaryBlue rounded-xl py-3 text-primaryBlue mt-4 flex items-center gap-2 text-[1.2rem] font-medium justify-center"
      onClick={signInGoogle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
      >
        <g clipPath="url(#clip0_94_2233)">
          <rect
            width="17"
            height="17"
            transform="translate(0 0.5)"
            fill="white"
          />
          <path
            d="M17.0001 9.18836C17.0001 8.49148 16.9422 7.98294 16.817 7.45557H8.67358V10.601H13.4536C13.3573 11.3826 12.8368 12.5598 11.6804 13.3508L11.6642 13.4562L14.239 15.4053L14.4173 15.4227C16.0556 13.9442 17.0001 11.7687 17.0001 9.18836Z"
            fill="#4285F4"
          />
          <path
            d="M8.67337 17.4757C11.0152 17.4757 12.9811 16.7222 14.4171 15.4227L11.6802 13.3508C10.9477 13.8499 9.96472 14.1983 8.67337 14.1983C6.37973 14.1983 4.43304 12.7199 3.73909 10.6763L3.63738 10.6847L0.960062 12.7095L0.925049 12.8046C2.35134 15.5733 5.28105 17.4757 8.67337 17.4757Z"
            fill="#34A853"
          />
          <path
            d="M3.73919 10.6763C3.55609 10.1489 3.45012 9.58382 3.45012 8.99997C3.45012 8.41605 3.55609 7.85102 3.72956 7.32365L3.72471 7.21134L1.01384 5.15405L0.925148 5.19528C0.337305 6.34422 0 7.63444 0 8.99997C0 10.3655 0.337305 11.6556 0.925148 12.8046L3.73919 10.6763Z"
            fill="#FBBC05"
          />
          <path
            d="M8.67337 3.80142C10.302 3.80142 11.4006 4.4889 12.0271 5.0634L14.4749 2.72786C12.9716 1.36233 11.0152 0.52417 8.67337 0.52417C5.28105 0.52417 2.35134 2.42648 0.925049 5.19519L3.72946 7.32357C4.43304 5.27998 6.37973 3.80142 8.67337 3.80142Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_94_2233">
            <rect
              width="17"
              height="17"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      Continuar con Google
    </button>
  );
};
