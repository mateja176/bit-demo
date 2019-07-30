import React from 'react';

export interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <p>Hello {name}</p>;

export default Hello;
