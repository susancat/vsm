import React from 'react';
import { Link } from 'react-router-dom';

export default function Tr({ children, to }) {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : 'tr';

  return (
      <ContentTag to={to}>{children}</ContentTag>
  );
}