import React from 'react';
import { Button, Card, Flex } from 'antd';
import styles from './style.module.scss';
import { useTypedSelector } from '@store/hooks/baseHooks';
import { useJoinClub } from '@hooks/useJoinClub';
import { SettingOutlined } from '@ant-design/icons';

interface GroupInfoProps {
	name: string | undefined;
	description: string | undefined;
	fullDescription: string | undefined;
	partisipants: number | undefined;
	isLoading: boolean;
	id: string | undefined;
	creatorClubId: string | undefined;
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
}) => {
	const user = useTypedSelector((state) => state.user);
	const joinClub = useJoinClub();
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
			<Flex gap="middle">
				{user.clubsId.includes(id ? id : '') ? (
					<Button danger>Выйти</Button>
				) : (
					<Button onClick={() => joinClub.mutate(id ? id : '')} type="primary">
						Вступить
					</Button>
				)}
				{user.id == creatorClubId ? <SettingOutlined /> : ''}
			</Flex>
		</Card>
	);
};
