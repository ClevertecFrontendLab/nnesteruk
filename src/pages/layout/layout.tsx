import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { AccordionMenu } from '~/components/accordion-menu';
import { Header } from '~/components/header/header';
import { IconList } from '~/components/icon-menu';
import { Emoji } from '~/components/icons/emoji';
import { FavoritesIcon } from '~/components/icons/favorites-icon';
import { GroupIcon } from '~/components/icons/group';
import { Likes } from '~/shared-types/types';

export const Layout = () => {
    const listIcon: Likes[] = [
        { icon: <FavoritesIcon />, count: 375 },
        { icon: <GroupIcon />, count: 375 },
        { icon: <Emoji />, count: 375 },
    ];

    return (
        <Box>
            <Flex direction='column' minHeight='100vh'>
                <Header />
                <Flex flex={1}>
                    <AccordionMenu />
                    <Box flex={1} overflowY='auto' marginLeft='255px' marginRight='200px'>
                        <Outlet />
                    </Box>
                    <Box paddingY={4} paddingX={14} position='fixed' right={0}>
                        <IconList items={listIcon} />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};
