import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { useGetPostsQuery } from '~/query/services/posts.ts';

import { customTheme } from './global theme/theme';
import { RoutesProvider } from './routes';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <ChakraProvider theme={customTheme}>
            <RoutesProvider />
        </ChakraProvider>
    );
}

export default App;
