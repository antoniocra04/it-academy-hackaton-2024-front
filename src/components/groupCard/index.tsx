import React from 'react';
import { Button, Card } from 'antd';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '@store/hooks/baseHooks';
import { useJoinClub } from '@hooks/useJoinClub';
import { useExitClub } from '@hooks/useExitClub';
import { HOST } from '@api/client';

interface GroupCardProps {
	name: string;
	description: string;
	partisipants: number;
	id: string;
	imagePath: string;
}

const { Meta } = Card;

export const GroupCard: React.FC<GroupCardProps> = ({ name, description, partisipants, id, imagePath }) => {
	const navigate = useNavigate();
	const joinClub = useJoinClub();
	const exitClub = useExitClub();
	const user = useTypedSelector((state) => state.user);
	return (
		<Card
			hoverable
			style={{ width: 300 }}
			onClick={() => navigate(`group/${id}`)}
			cover={<img className={styles.groupCardImg} alt="" src={`${imagePath}`} />}
		>
			<Meta title={name} description={description} />
			<p>Участников: {partisipants}</p>
			{user.clubsId.includes(id) ? (
				<Button
					onClick={(e) => {
						exitClub.mutate(id);
						e.stopPropagation();
					}}
					danger
				>
					Выйти
				</Button>
			) : (
				<Button
					onClick={(e) => {
						joinClub.mutate(id);
						e.stopPropagation();
					}}
					type="primary"
				>
					Вступить
				</Button>
			)}
		</Card>
	);
};
