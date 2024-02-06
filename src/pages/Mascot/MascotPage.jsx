import React from 'react';
import Mascot from 'components/Mascot/Mascot';

import styled from 'styled-components';

import BackgroundImage from 'assets/Mascot/Background.svg';

const Page = styled.div`
  background-image: url(${BackgroundImage});
`;

const MascotPage = () => {
  return (
    <Page>
      <Mascot />
    </Page>
  );
};

export default MascotPage;
