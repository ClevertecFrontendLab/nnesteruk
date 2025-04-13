import { Flex, Text } from '@chakra-ui/react';

import { CategoryT } from '../recipe-list/recipe-list.types';

type CategoryProps = {
    category: CategoryT;
    bgColorSectionCategory?: string;
};

export const Category = ({ category, bgColorSectionCategory = 'lightGreen' }: CategoryProps) => (
    <Flex
        bgColor={bgColorSectionCategory}
        borderRadius='4px'
        py={0.5}
        px={2}
        gap={2}
        alignItems='center'
        justifyContent='center'
    >
        <img src={category.icon} alt='FirstDishes Icon' width={16} />
        <Text fontSize={14}>{category.text}</Text>
    </Flex>
);
