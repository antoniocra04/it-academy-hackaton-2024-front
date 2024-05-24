import React from 'react';
import { Layout, theme } from 'antd';
import { Header } from '@components/header';

const { Content, Footer } = Layout;

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout>
			<Header />
			<Content style={{ padding: '0 48px' }}>
				<div
					style={{
						background: colorBgContainer,
						minHeight: 280,
						padding: 24,
						borderRadius: borderRadiusLG,
					}}
				>
					{children}
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Клубы ©{new Date().getFullYear()} Создано с помощью Команда 6</Footer>
		</Layout>
	);
};
