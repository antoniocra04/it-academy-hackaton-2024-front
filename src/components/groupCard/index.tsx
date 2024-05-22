import React from 'react';
import { Button, Card } from 'antd';
import styles from './style.module.scss';

interface GroupCardProps {
	name: string;
	description: string;
	partisipants: string;
}

const { Meta } = Card;

export const GroupCard: React.FC<GroupCardProps> = ({ name, description, partisipants }) => {
	return (
		<Card
			hoverable
			style={{ width: 300 }}
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
