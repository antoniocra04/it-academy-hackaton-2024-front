import React from 'react';
import { Button, Card } from 'antd';
import styles from './style.module.scss';
import { useTypedSelector } from '@store/hooks/baseHooks';

interface GroupInfoProps {
	name: string | undefined;
	description: string | undefined;
	fullDescription: string | undefined;
	partisipants: number | undefined;
	isLoading: boolean;
	id: string | undefined;
}

const { Meta } = Card;

export const GroupInfo: React.FC<GroupInfoProps> = ({
	name,
	description,
	partisipants,
	fullDescription,
	isLoading,
	id,
}) => {
	const user = useTypedSelector((state) => state.user);
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
			<p>Участников: {partisipants}</p>
			{user.clubsId.includes(id ? id : '') ? <Button danger>Выйти</Button> : <Button type="primary">Вступить</Button>}
		</Card>
	);
};
