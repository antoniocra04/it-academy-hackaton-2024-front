import { getDisscussionById } from '@api/services/disscussions';
import { DisscussionCard } from '@components/disscussionCard';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

export const DisscussionPage: React.FC = () => {
	const { id } = useParams();
	const disscussion = useQuery({ queryKey: ['disscussion'], queryFn: () => getDisscussionById(id ? id : '') });

	return (
		<PageLayout>
			<PageTitle title="Обсуждение" />
			<Flex justify="center">
				<DisscussionCard
					isLoading={disscussion.isFetching}
					name={disscussion.data?.data.title}
					description={disscussion.data?.data.description}
					fullDescription={disscussion.data?.data.fullDescriptionl}
				/>
			</Flex>
		</PageLayout>
	);
};
