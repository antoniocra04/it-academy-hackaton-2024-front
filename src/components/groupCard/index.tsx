import React from 'react';
import { Button, Card } from 'antd';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

interface GroupCardProps {
	name: string;
	description: string;
	partisipants: string;
	id: string;
}

const { Meta } = Card;

export const GroupCard: React.FC<GroupCardProps> = ({ name, description, partisipants, id }) => {
	const navigate = useNavigate();
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
			<Button type="primary">Вступить</Button>
		</Card>
	);
};
