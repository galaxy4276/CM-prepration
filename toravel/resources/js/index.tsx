import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

const Index: React.FC = () => {
    return (
        <ChakraProvider>
        </ChakraProvider>
    );
};

render(<Index />, document.querySelector('#app'));
