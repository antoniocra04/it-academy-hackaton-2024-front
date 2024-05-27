import React from 'react';
import { Card } from 'antd';
import styles from './style.module.scss';

interface DisscussionCardProps {
	name: string | undefined;
	description: string | undefined;
	fullDescription: string | undefined;
	isLoading: boolean;
}

const { Meta } = Card;

export const DisscussionCard: React.FC<DisscussionCardProps> = ({ name, description, fullDescription, isLoading }) => {
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
			loading={isLoading}
		>
			<Meta title={name} description={description} />
			<p>{fullDescription}</p>
		</Card>
	);
};
