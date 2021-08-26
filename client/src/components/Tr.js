import React from 'react';
import { Link } from 'react-router-dom';

export default function Td({ children, to }) {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : 'div';

  return (
    <tr>
      <ContentTag to={to}>{children}</ContentTag>
    </tr>
  );
}