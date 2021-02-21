import * as React from 'react';


type GreetingsProps = {
  name: string;
  children: React.ReactNode;
};


const Greetings: React.FC<GreetingsProps> = ({ name }) => {
  return <div>Hello, {name}</div>
};


export default Greetings;