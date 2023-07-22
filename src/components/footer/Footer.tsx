import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrap>
      <p>Copyright ⓒ 2023. Yr.Kim All rights reserved.</p>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  padding: 50px 0;
  color: var(--white);
  background: var(--compo-primary);

  p {
    font-size: 18px;
    letter-spacing: -0.4px;
    text-align: center;
  }
`;

export default Footer;
