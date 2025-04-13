import { Avatar, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';

import { useDottedText } from '~/hooks/useDottedText';

import { Author } from './author-list';

export const AuthorItem = ({ author }: { author: Author }) => (
    <Card bgColor='white' borderRadius='8px'>
        <CardBody display='flex' flexDirection='column' gap={4}>
            <Flex alignItems='center' gap={3}>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Flex direction='column'>
                    <Heading fontSize={18} fontWeight={500}>
                        {author.name}
                    </Heading>
                    <Heading fontSize={14} fontWeight={400} color='gray'>
                        {author.nick}
                    </Heading>
                </Flex>
            </Flex>
            <Text>{useDottedText(author.text)}</Text>
        </CardBody>
    </Card>
);
