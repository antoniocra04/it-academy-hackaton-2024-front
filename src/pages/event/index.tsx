import { getEvetntById } from '@api/services/event';
import { EventCard } from '@components/eventCard';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

export const EventPage: React.FC = () => {
	const { id } = useParams();
	const event = useQuery({ queryKey: ['event'], queryFn: () => getEvetntById(id ? id : '') });

	return (
		<PageLayout>
			<PageTitle title="Мероприятие" />
			<Flex justify="center">
				<EventCard
					isLoading={event.isFetching}
					name={event.data?.data.name}
					description={event.data?.data.description}
					fullDescription="asdfasdf"
					partisipants={event.data?.data.membersCount}
					id={id}
					creatorEventId={event.data?.data.creatorEventID}
				/>
			</Flex>
		</PageLayout>
	);
};
