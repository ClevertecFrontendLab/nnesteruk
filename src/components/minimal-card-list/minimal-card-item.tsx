import { Button, Flex, Text } from '@chakra-ui/react';

import { Card } from './minimal-card-list';

export const MinimalCardItem = ({ card }: { card: Card }) => (
    <Flex
        alignItems='center'
        gap={3}
        border='1px solid lightGray'
        borderRadius='8px'
        padding='12px 24px'
    >
        <img src={card.img} alt='Frying-pan icon' width={24} />
        <Text flex={1} fontWeight={500} fontSize={20}>
            {card.title}
        </Text>
        <Button color='lime.600' borderColor='lime.600' variant='outline'>
            Готовить
        </Button>
    </Flex>
);
