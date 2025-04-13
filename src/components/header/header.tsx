import { HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { Likes } from '~/shared-types/types';

import { IconList } from '../icon-menu';
import { Logo } from '../icons/logo';
import { LogoName } from '../icons/logo-name';
import { DynamicBreadcrumb } from './breadcrumb/breadcrumb';

export const Header = ({ iconList }: { iconList?: Likes[] }) => (
    <Box
        as='header'
        bgColor='#ffffd3'
        paddingRight={{ sm: 8, lg: 16 }}
        position='sticky'
        top={0}
        zIndex={100}
        py={4}
    >
        <Flex alignItems='center' justifyContent='space-between'>
            <Flex maxW='255px' width='100%' paddingLeft={4} gap={1.5}>
                <Logo />
                <Box paddingTop={1} display={{ sm: 'none', md: 'block' }}>
                    <LogoName />
                </Box>
            </Flex>
            <Flex flex={1} justifyContent='flex-end'>
                {iconList ? (
                    <Flex alignItems='center' gap={4}>
                        <IconList items={iconList} direction='row' />
                        <HamburgerIcon boxSize={6} />
                    </Flex>
                ) : (
                    <>
                        <Box
                            display={{ sm: 'none', lg: 'flex' }}
                            paddingLeft={4}
                            alignSelf='center'
                            flex={1}
                        >
                            <DynamicBreadcrumb />
                        </Box>
                        <Box px={6}>
                            <Flex gap={3}>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box>
                                    <Text fontSize={18} fontWeight={500}>
                                        Екатерина Константинопольская
                                    </Text>
                                    <Text color='gray' fontSize={14}>
                                        @bake_and_pie
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </>
                )}
            </Flex>
        </Flex>
    </Box>
);
