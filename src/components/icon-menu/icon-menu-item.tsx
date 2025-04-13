import { Box, Flex, Text } from '@chakra-ui/react';

import { Likes } from '~/shared-types/types';

import { IconList } from './icon-menu';

type IconMenuItemProps = Pick<IconList, 'gap'> & {
    item: Likes;
    padding: string;
    fontSize: number;
};

export const IconMenuItem = ({ item, gap, padding, fontSize }: IconMenuItemProps) => (
    <Box padding={padding}>
        <Flex gap={gap} align='center'>
            {item.icon}
            <Text color='#2db100' fontWeight={600} fontSize={fontSize}>
                {item.count}
            </Text>
        </Flex>
    </Box>
);
