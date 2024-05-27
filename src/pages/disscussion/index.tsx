import { getDisscussionById } from '@api/services/disscussions';
import { Comment } from '@components/comment';
import { DisscussionCard } from '@components/disscussionCard';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
import { CreateCommentForm } from '@components/createCommentForm';

const { Title } = Typography;

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
					creatorId={disscussion.data?.data.creatorId}
				/>
			</Flex>
			<Title style={{ marginBottom: 40 }} level={3}>
				Комментарии
			</Title>
			<CreateCommentForm />
			<Flex style={{ flexDirection: 'column-reverse' }} gap="middle" align="center">
				{disscussion.data?.data.comments.map((comment, index) => (
					<Comment user={comment.logginUser} text={comment.commentariy} key={index} />
				))}
			</Flex>
		</PageLayout>
	);
};
