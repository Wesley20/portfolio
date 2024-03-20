// utils/facebookSDK.js
import React from 'react';

const FacebookSDK = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v19.0&appId=2773322349472674';
    script.nonce = 'lwlRh81i';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="fb-root"></div>;
};

export default FacebookSDK;
