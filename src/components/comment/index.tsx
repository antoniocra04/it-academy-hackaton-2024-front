import { Card } from 'antd';

interface CommentProps {
	user: string;
	text: string;
}

export const Comment: React.FC<CommentProps> = ({ user, text }) => {
	return (
		<Card size="small" title={user} style={{ width: '90%' }}>
			<p>{text}</p>
		</Card>
	);
};
