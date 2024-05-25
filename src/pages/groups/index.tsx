import { getAllClubs } from '@api/services/clubs';
import { GroupCard } from '@components/groupCard';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';

export const GroupsPage: React.FC = () => {
	const groups = useQuery({ queryKey: ['groups'], queryFn: getAllClubs });
	return (
		<PageLayout>
			<PageTitle title="Клубы" />
			<Flex gap="middle" wrap>
				{groups.isSuccess
					? groups.data.data.$values.map((club, index) => (
							<GroupCard
								key={index}
								name={club.title}
								description={club.description}
								partisipants="33333"
								id={club.id}
							/>
						))
					: ''}
			</Flex>
		</PageLayout>
	);
};
