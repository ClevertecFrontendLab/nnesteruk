import { ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';

import FilterIcon from '~/assets/icons/filter-icon.svg';
import { AuthorList } from '~/components/author-list';
import { MinimalCardList } from '~/components/minimal-card-list';
import { RecipeList, RecipeListWithButtons } from '~/components/recipe-list';

export const Home = () => (
    <>
        <Box marginX='auto' maxW='520px' marginTop={6}>
            <Center>
                <Heading fontWeight={500}>Приятного аппетита!</Heading>
            </Center>
            <Flex direction='column' gap={4} marginTop={8}>
                <Flex gap={3}>
                    <Button bgColor='transparent' border='1px solid lightGray' paddingX={3}>
                        <img src={FilterIcon} alt='filter' />
                    </Button>
                    <InputGroup borderColor='lightGray'>
                        <Input placeholder='Название или ингредиент...' width='100%' />
                        <InputRightElement>
                            <IconButton
                                aria-label='Search database'
                                bgColor='transparent'
                                icon={<SearchIcon />}
                                _hover={{ bgColor: 'transparent' }}
                            />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex gap={4}>
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel htmlFor='email-alerts' mb='0' whiteSpace='nowrap'>
                            Исключить мои аллергены
                        </FormLabel>
                        <Switch id='email-alerts' />
                    </FormControl>
                    <Select placeholder='Выберите из списка...'>
                        <option value='option1'>option 1</option>
                        <option value='option2'>option 2</option>
                        <option value='option3'>option 3</option>
                    </Select>
                </Flex>
            </Flex>
        </Box>

        <Container maxW='1456px' width='100%' padding='24px 72px 30px 24px' overflowX='hidden'>
            <Box>
                <Heading fontWeight={500}>Новые рецепты</Heading>
                <RecipeList />
            </Box>
            <Box marginTop={10}>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Heading fontWeight={500}>Самое сочное </Heading>
                    <Button rightIcon={<ArrowForwardIcon />} bgColor='lime.400'>
                        Вся подборка
                    </Button>
                </Flex>
                <RecipeListWithButtons bgColorSectionCategory='lightYellow' />
            </Box>
            <Box mt={10} bgColor='lime.300' px={6} py={6} borderRadius='16px'>
                <Flex justifyContent='space-between'>
                    <Heading fontWeight={500}>Кулинарные блоги</Heading>
                    <Button bgColor='transparent' rightIcon={<ArrowForwardIcon />}>
                        Все авторы
                    </Button>
                </Flex>
                <AuthorList />
            </Box>

            <Box borderTop='1px solid totalBlack' marginTop={10}>
                <Flex justifyContent='space-between' paddingY={6}>
                    <Heading fontWeight={500}>Веганская кухня </Heading>
                    <Box maxWidth='668px'>
                        <Text color='lightGray'>
                            Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                            попробовать вегетарианскую диету и готовить вкусные вегетарианские
                            блюда.
                        </Text>
                    </Box>
                </Flex>
                <Grid gridTemplateColumns='1fr 1fr' gap='24px'>
                    <RecipeList
                        showImg={false}
                        bgColorSectionCategory='lightYellow'
                        limit={2}
                        showAll={false}
                    />
                    <MinimalCardList />
                </Grid>
            </Box>
        </Container>
    </>
);
