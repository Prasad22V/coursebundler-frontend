import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'yellow.800' }) => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{transform:'scale(4)'}}>
        <Spinner
          thickness="1.8px"
          speed="0.80s"
          emptyColor="transparent"
          color={color}
          size='xl'
        />
      </div>
    </VStack>
  );
};

export default Loader;
