import { Typography } from 'antd';

const { Title } = Typography;

interface PageTitleProps {
	title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
	return <Title style={{ marginBottom: 40 }}>{title}</Title>;
};
