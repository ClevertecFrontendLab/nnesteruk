import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Category } from '~/components/category/category';
import { IconList } from '~/components/icon-menu';
import { useDottedText } from '~/hooks/useDottedText';

import { RecipeItemProps } from './recipe-list.types';

export const RecipeItem = ({ recipe, showImg, bgColorSectionCategory }: RecipeItemProps) => (
    <Card borderRadius='lg' maxWidth='322px' width='100%'>
        {showImg && <Image src={recipe.img} alt='Solyanka' borderRadius='lg' width='100%' />}
        <CardBody
            display='flex'
            flexDirection='column'
            px={{ base: 2, lg: 3, xl: 6 }}
            py={{ base: 2, lg: 2, xl: 6 }}
            gap={6}
        >
            <Flex direction='column' gap={2}>
                <Heading
                    size='md'
                    fontWeight={500}
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    overflow='hidden'
                >
                    {recipe.title}
                </Heading>
                <Text fontSize={14} fontFamily='Inter'>
                    {useDottedText(recipe.text)}
                </Text>
            </Flex>
            <Flex justifyContent='space-between' alignItems='center'>
                <Category
                    bgColorSectionCategory={bgColorSectionCategory}
                    category={recipe.category}
                />
                <IconList direction='row' items={recipe.likes} gap={1.5} fontSize={12} />
            </Flex>
        </CardBody>
    </Card>
);
