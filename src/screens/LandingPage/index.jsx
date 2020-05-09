import React from 'react';
import Footer from 'components/Footer';
import HomeSidebar from 'components/HomeSidebar';

export default function LandingPageWrraper(Component) {
  return function LandingPageWrraper(props) {
    return (
      <>
        <HomeSidebar />
        <Component {...props} />
        <Footer />
      </>
    );
  };
}
