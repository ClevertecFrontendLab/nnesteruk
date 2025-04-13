import { Image } from '@chakra-ui/react';

export const ExitIcon = ({ size = '16px' }: { size?: string }) => (
    <Image boxSize={size} src='src/assets/icons/exit.svg' alt='Exit Icon' />
);
