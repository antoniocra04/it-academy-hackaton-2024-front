import React from 'react';
import { Button, Card, Flex } from 'antd';
import styles from './style.module.scss';
import { useTypedSelector } from '@store/hooks/baseHooks';
import { useJoinClub } from '@hooks/useJoinClub';
import { SettingOutlined } from '@ant-design/icons';
import { useExitClub } from '@hooks/useExitClub';
import { useNavigate } from 'react-router-dom';
import { HOST } from '@api/client';

interface GroupInfoProps {
	name: string | undefined;
	description: string | undefined;
	fullDescription: string | undefined;
	partisipants: number | undefined;
	isLoading: boolean;
	id: string | undefined;
	creatorClubId: string | undefined;
	imagePath: string | undefined;
}

const { Meta } = Card;

export const GroupInfo: React.FC<GroupInfoProps> = ({
	name,
	description,
	partisipants,
	fullDescription,
	isLoading,
	id,
	creatorClubId,
	imagePath,
}) => {
	const user = useTypedSelector((state) => state.user);
	const navigate = useNavigate();
	const joinClub = useJoinClub();
	const exitClub = useExitClub();
	return (
		<Card
			style={{ width: 600 }}
			cover={<img className={styles.groupInfoImg} alt="" src={`${HOST}${imagePath}`} />}
			loading={isLoading}
		>
			<Meta title={name} description={description} />
			<p>{fullDescription}</p>
			<p>Участников: {user.clubsId.includes(id ? id : '') ? (partisipants ? partisipants : 0) + 1 : partisipants}</p>
			<Flex gap="middle">
				{user.clubsId.includes(id ? id : '') ? (
					<Button onClick={() => exitClub.mutate(id ? id : '')} danger>
						Выйти
					</Button>
				) : (
					<Button onClick={() => joinClub.mutate(id ? id : '')} type="primary">
						Вступить
					</Button>
				)}
				{user.id == creatorClubId ? <SettingOutlined onClick={() => navigate(`/editClub/${id}`)} /> : ''}
			</Flex>
		</Card>
	);
};
