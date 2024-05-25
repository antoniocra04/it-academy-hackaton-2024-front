import { useTypedSelector } from '@store/hooks/baseHooks';
import { Navigate } from 'react-router-dom';

interface PrivaterouteProps {
	children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivaterouteProps> = ({ children }) => {
	const user = useTypedSelector((state) => state.user);
	if (user.id) {
		return children;
	} else {
		return <Navigate to="/login" replace />;
	}
};
