import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { Likes } from '~/shared-types/types';

import { IconMenuItem } from './icon-menu-item';

export type IconList = {
    items: Likes[];
    direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    gap?: number;
    fontSize?: number;
};

export const IconList: FC<IconList> = ({ items, direction = 'column', gap = 2, fontSize = 16 }) => (
    <Flex direction={direction} gap={direction === 'column' ? 6 : 2}>
        {items?.map((item, index) => (
            <IconMenuItem
                key={index}
                item={item}
                gap={gap}
                padding={direction === 'column' ? '8px 16px' : '4px 4px'}
                fontSize={fontSize}
            />
        ))}
    </Flex>
);
