import { GroupActionCard } from '@components/groupActionCard';
import { GroupInfo } from '@components/groupInfo';
import { PageLayout } from '@components/pageLayout';
import { Flex, Typography } from 'antd';

const { Title } = Typography;

export const GroupPage: React.FC = () => {
	return (
		<PageLayout>
			<Flex justify="center">
				<GroupInfo name="asdfasdf" description="sadfasasdf" fullDescription="asdfasdf" partisipants="344" />
			</Flex>
			<Title>Мероприятия: </Title>
			<Flex gap="middle" wrap>
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
			</Flex>
			<Title>Обсуждение: </Title>
			<Flex gap="middle" wrap>
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
				<GroupActionCard name="asdfasdf" description="asdfasf" />
			</Flex>
		</PageLayout>
	);
};
