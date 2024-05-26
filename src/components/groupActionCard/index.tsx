import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

interface GroupActionCard {
	name: string;
	description: string;
	id: string;
}

export const GroupActionCard: React.FC<GroupActionCard> = ({ name, description, id }) => {
	const navigate = useNavigate();
	return (
		<Card onClick={() => navigate(`/event/${id}`)} hoverable title={name} style={{ width: 300 }}>
			<p>{description}</p>
		</Card>
	);
};
