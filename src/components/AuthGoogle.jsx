

import React from 'react';

export const AuthGoogle = (props) => {
  const { signInGoogle } = props;


  return (
    <button onClick={signInGoogle}>
      Continue with Google
    </button>
  );
};
