import * as React from 'react';

type GreetingsProps = {
  name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }): JSX.Element => {
  return (
    <>
      <div>Hello, {name}</div>
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404"
      />
    </>
  );
};

export default Greetings;
