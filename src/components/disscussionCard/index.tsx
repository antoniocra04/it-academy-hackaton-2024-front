import React from 'react';
import { Card } from 'antd';
import styles from './style.module.scss';
import { SettingOutlined } from '@ant-design/icons';
import { useTypedSelector } from '@store/hooks/baseHooks';
import { useNavigate, useParams } from 'react-router-dom';

interface DisscussionCardProps {
	name: string | undefined;
	description: string | undefined;
	fullDescription: string | undefined;
	isLoading: boolean;
	creatorId: string | undefined;
}

const { Meta } = Card;

export const DisscussionCard: React.FC<DisscussionCardProps> = ({
	name,
	description,
	fullDescription,
	isLoading,
	creatorId,
}) => {
	const user = useTypedSelector((state) => state.user);
	const { id } = useParams();
	const navigate = useNavigate();
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
			{user.id == creatorId ? <SettingOutlined onClick={() => navigate(`/editDisscussion/${id}`)} /> : ''}
		</Card>
	);
};
