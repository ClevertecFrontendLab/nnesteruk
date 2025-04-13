import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { Logo } from '../icons/logo';
import { DynamicBreadcrumb } from './breadcrumb/breadcrumb';

export const Header = () => (
    <Box as='header' bgColor='#ffffd3' paddingRight='200px' position='sticky' top={0} zIndex={100}>
        <Flex>
            <Box maxW='255px' width='100%' alignSelf='center' paddingLeft={4}>
                <Logo />
            </Box>
            <Box flex={1}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box paddingLeft={4}>
                        <DynamicBreadcrumb />
                    </Box>
                    <Box marginRight='-60px' paddingY={3.5}>
                        <Flex gap={3}>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            <Box>
                                <Text fontSize='18px' fontWeight={700}>
                                    Екатерина Константинопольская
                                </Text>
                                <Text color='gray'>@bake_and_pie</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>
);
