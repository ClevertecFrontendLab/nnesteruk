import { Box, Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { Category } from '~/components/category/category';
import { IconList } from '~/components/icon-menu';
import { useDottedText } from '~/hooks/useDottedText';

import { RecipeItemProps } from './recipe-list.types';

export const RecipeItem = ({ recipe, showImg, bgColorSectionCategory }: RecipeItemProps) => (
    <Card
        borderRadius='lg'
        width={{ sm: '158px', lg: '279px', xl: '322px' }}
        flexShrink={0}
        flexGrow={1}
        borderBottom='0.5px solid lightGray'
    >
        {showImg && (
            <Box position='relative'>
                <Image src={recipe.img} alt='Solyanka' borderRadius='lg' width='100%' />
                <Box position='absolute' top={2} left={2} whiteSpace='nowrap'>
                    <Category
                        category={recipe.category}
                        bgColorSectionCategory={bgColorSectionCategory}
                    />
                </Box>
            </Box>
        )}
        <CardBody
            display='flex'
            flexDirection='column'
            px={{ sm: 2, lg: 3, xl: 5 }}
            py={{ sm: 2, lg: 3, xl: 5 }}
            gap={showImg ? { base: 2, lg: 6 } : 6}
        >
            <Flex direction='column' gap={2}>
                <Heading
                    size='md'
                    fontWeight={500}
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    overflow='hidden'
                    fontSize={{ sm: 16, lg: 18, xl: 20 }}
                >
                    {recipe.title}
                </Heading>
                <Text
                    fontSize={14}
                    fontFamily='Inter'
                    display={showImg ? { sm: 'none', lg: 'inline-block' } : 'inline-block'}
                >
                    {useDottedText(recipe.text)}
                </Text>
            </Flex>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box display={showImg ? { sm: 'none', lg: 'block' } : 'block'}>
                    <Category
                        bgColorSectionCategory={bgColorSectionCategory}
                        category={recipe.category}
                    />
                </Box>
                <IconList direction='row' items={recipe.likes} gap={1.5} fontSize={12} />
            </Flex>
        </CardBody>
    </Card>
);
