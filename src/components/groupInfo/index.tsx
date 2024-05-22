import React from 'react';
import { Button, Card } from 'antd';
import styles from './style.module.scss';

interface GroupInfoProps {
	name: string;
	description: string;
	fullDescription: string;
	partisipants: string;
}

const { Meta } = Card;

export const GroupInfo: React.FC<GroupInfoProps> = ({ name, description, partisipants, fullDescription }) => {
	return (
		<Card
			style={{ width: 600 }}
			cover={
				<img
					className={styles.groupInfoImg}
					alt="example"
					src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
				/>
			}
		>
			<Meta title={name} description={description} />
			<p>{fullDescription}</p>
			<p>Участников: {partisipants}</p>
			<Button type="primary">Вступить</Button>
		</Card>
	);
};
