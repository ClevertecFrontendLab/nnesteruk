import { Avatar, Box, Button, Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';

import FirstDishesIcon from '~/assets/icons/castrulya.svg';
import { Category } from '~/components/category/category';
import { IconList } from '~/components/icon-menu';
import { FavoritesIcon } from '~/components/icons/favorites-icon';
import { useDottedText } from '~/hooks/useDottedText';

import { RecipesItemWithButton } from '../recipe-list.types';

export const RecipeItemWithButtons = ({
    recipe,
    bgColorSectionCategory,
}: RecipesItemWithButton) => (
    <Card borderRadius='lg' flexDirection='row'>
        <Box position='relative'>
            <Image
                src={recipe.img}
                alt={recipe.title}
                borderLeftRadius='lg'
                maxWidth='346px'
                height='100%'
            />
            {recipe.recommendation && (
                <Box
                    as='span'
                    bgColor='lime.150'
                    borderRadius='4px'
                    py={1}
                    px={2}
                    position='absolute'
                    bottom='24px'
                    left='24px'
                >
                    <Flex alignItems='center' gap={2}>
                        <Avatar
                            boxSize={4}
                            name='Dan Abrahmov'
                            src={recipe.recommendation?.avatar}
                        />
                        <Text fontSize={14}>{recipe.recommendation?.text}</Text>
                    </Flex>
                </Box>
            )}
        </Box>
        <CardBody
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            gap={6}
            maxW='322px'
        >
            <Flex justifyContent='space-between'>
                <Category
                    category={{ icon: FirstDishesIcon, text: 'Первые блюда' }}
                    bgColorSectionCategory={bgColorSectionCategory}
                />
                <IconList items={recipe.likes} direction='row' fontSize={12} />
            </Flex>

            <Flex direction='column' gap={2}>
                <Heading
                    size='md'
                    fontWeight={500}
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                >
                    {recipe.title}
                </Heading>
                <Text overflow='hidden'>{useDottedText(recipe.text)}</Text>
            </Flex>
            <Flex gap={2} justifyContent='flex-end'>
                <Button
                    leftIcon={<FavoritesIcon />}
                    bgColor='transparent'
                    border='1px solid '
                    borderColor='totalBlack'
                >
                    Сохранить
                </Button>
                <Button bgColor='totalBlack' color='white'>
                    Готовить
                </Button>
            </Flex>
        </CardBody>
    </Card>
);
