import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    List,
} from '@chakra-ui/react';
import { span } from 'framer-motion/client';

import { Item } from './accordion.type';
import { MenuListItem } from './menu-list-item';

export const AccordionMenuItem = ({ item }: { item: Item }) => (
    <AccordionItem key={item.title} border='none'>
        <AccordionButton
            width='100%'
            paddingX='8px'
            paddingY='12px'
            fontSize='16px'
            fontWeight={500}
        >
            <Box>{item.leftIcon}</Box>
            <Box as={span} paddingLeft='12px' flex='1' textAlign='left'>
                {item.title}
            </Box>
            <AccordionIcon fontSize='20px' />
        </AccordionButton>

        {item?.list && (
            <AccordionPanel pb='20px'>
                <List spacing={2}>
                    {item?.list?.map((listItem) => <MenuListItem listItem={listItem} />)}
                </List>
            </AccordionPanel>
        )}
    </AccordionItem>
);
