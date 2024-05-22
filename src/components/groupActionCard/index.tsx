import { Card } from 'antd';

interface GroupActionCard {
	name: string;
	description: string;
}

export const GroupActionCard: React.FC<GroupActionCard> = ({ name, description }) => {
	return (
		<Card hoverable title={name} style={{ width: 300 }}>
			<p>{description}</p>
		</Card>
	);
};
