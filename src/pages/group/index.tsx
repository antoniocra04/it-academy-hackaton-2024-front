import { getClubById } from '@api/services/clubs';
import { GroupActionCard } from '@components/groupActionCard';
import { GroupInfo } from '@components/groupInfo';
import { PageLayout } from '@components/pageLayout';
import { useQuery } from '@tanstack/react-query';
import { Flex, FloatButton, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { AppstoreAddOutlined, FireOutlined } from '@ant-design/icons';
import { useTypedSelector } from '@store/hooks/baseHooks';

const { Title } = Typography;

export const GroupPage: React.FC = () => {
	const { id } = useParams();
	const user = useTypedSelector((state) => state.user);
	const groupInfo = useQuery({ queryKey: ['group'], queryFn: () => getClubById(id ? id : '') });
	const navigate = useNavigate();

	return (
		<PageLayout>
			<Flex justify="center">
				<GroupInfo
					isLoading={groupInfo.isFetching}
					name={groupInfo.data?.data.title}
					description={groupInfo.data?.data.description}
					fullDescription={groupInfo.data?.data.fullDescription}
					partisipants={groupInfo.data?.data.countMembers}
					id={groupInfo.data?.data.id}
					creatorClubId={groupInfo.data?.data.creatorClubID}
					imagePath={groupInfo.data?.data.imagePath}
				/>
			</Flex>
			<Title>Мероприятия: </Title>
			<Flex gap="middle" wrap>
				{groupInfo.isSuccess
					? groupInfo.data.data.events.map((event, index) => (
							<GroupActionCard
								type="event"
								id={event.id}
								key={index}
								name={event.name}
								description={event.description}
							/>
						))
					: ''}
			</Flex>
			<Title>Обсуждение: </Title>
			<Flex gap="middle" wrap>
				{groupInfo.isSuccess
					? groupInfo.data.data.discussions.map((disccussion, index) => (
							<GroupActionCard
								type="disscussion"
								id={disccussion.id}
								key={index}
								name={disccussion.title}
								description={disccussion.description}
							/>
						))
					: ''}
			</Flex>
			{groupInfo.isSuccess
				? groupInfo.data.data.creatorClubID == user.id && (
						<FloatButton.Group style={{ right: 70, bottom: 90 }}>
							<FloatButton
								type="primary"
								onClick={() => navigate(`/createEvent/${groupInfo.data.data.id}`)}
								icon={<AppstoreAddOutlined />}
								tooltip={<div>Создать мероприятие</div>}
							/>
							<FloatButton
								type="primary"
								onClick={() => navigate(`/createDisscussion/${groupInfo.data.data.id}`)}
								icon={<FireOutlined />}
								tooltip={<div>Создать обсуждение</div>}
							/>
						</FloatButton.Group>
					)
				: ''}
		</PageLayout>
	);
};
