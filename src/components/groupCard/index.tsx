import React from 'react';
import { Button, Card } from 'antd';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '@store/hooks/baseHooks';

interface GroupCardProps {
	name: string;
	description: string;
	partisipants: number;
	id: string;
}

const { Meta } = Card;

export const GroupCard: React.FC<GroupCardProps> = ({ name, description, partisipants, id }) => {
	const navigate = useNavigate();
	const user = useTypedSelector((state) => state.user);
	return (
		<Card
			hoverable
			style={{ width: 300 }}
			onClick={() => navigate(`group/${id}`)}
			cover={
				<img
					className={styles.groupCardImg}
					alt="example"
					src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
				/>
			}
		>
			<Meta title={name} description={description} />
			<p>Участников: {partisipants}</p>
			{user.clubsId.includes(id) ? <Button danger>Выйти</Button> : <Button type="primary">Вступить</Button>}
		</Card>
	);
};
