import { Flex, Text } from '@chakra-ui/react';

import { CategoryT } from '../recipe-list/recipe-list.types';

export const Category = ({
    category,
    bgColorSectionCategory = 'lightGreen',
}: {
    category: CategoryT;
    bgColorSectionCategory?: string;
}) => (
    <Flex
        bgColor={bgColorSectionCategory}
        borderRadius='4px'
        py={0.5}
        px={2}
        gap={2}
        alignItems='center'
        justifyContent='center'
    >
        <img src={category.icon} alt='FirstDishes Icon' width={18} />
        <Text fontSize={14}>{category.text}</Text>
    </Flex>
);
