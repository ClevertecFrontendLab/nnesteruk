import { useBreakpointValue } from '@chakra-ui/react';

export const useDottedText = (str: string): string => {
    const maxLength = useBreakpointValue({ base: 100, md: 73, lg: 98, xl: 100 });
    if (!maxLength) return str;

    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
};
