import React from 'react';
import { Button, Card, Flex } from 'antd';
import styles from './style.module.scss';
import { useTypedSelector } from '@store/hooks/baseHooks';
import { SettingOutlined } from '@ant-design/icons';
import { useExitEvent } from '@hooks/useExitEvent';
import { useJoinEvent } from '@hooks/useJoinEvent';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
	name: string | undefined;
	description: string | undefined;
	fullDescription: string | undefined;
	partisipants: number | undefined;
	isLoading: boolean;
	id: string | undefined;
	creatorEventId: string | undefined;
	imagePath: string | undefined;
}

const { Meta } = Card;

export const EventCard: React.FC<EventCardProps> = ({
	name,
	description,
	fullDescription,
	isLoading,
	partisipants,
	id,
	creatorEventId,
	imagePath,
}) => {
	const user = useTypedSelector((state) => state.user);
	const joinEvent = useJoinEvent(id ? id : '');
	const exitEvent = useExitEvent(id ? id : '');
	const navigate = useNavigate();
	return (
		<Card
			style={{ width: 600 }}
			cover={<img className={styles.groupInfoImg} alt="" src={`${imagePath}`} />}
			loading={isLoading}
		>
			<Meta title={name} description={description} />
			<p>{fullDescription}</p>
			<p>Участников: {partisipants}</p>
			<Flex gap="middle">
				{user.eventsId.includes(id ? id : '') ? (
					<Button onClick={() => exitEvent.mutate(id ? id : '')} danger>
						Выйти
					</Button>
				) : (
					<Button onClick={() => joinEvent.mutate(id ? id : '')} type="primary">
						Вступить
					</Button>
				)}
				{user.id == creatorEventId ? <SettingOutlined onClick={() => navigate(`/editEvent/${id}`)} /> : ''}
			</Flex>
		</Card>
	);
};
