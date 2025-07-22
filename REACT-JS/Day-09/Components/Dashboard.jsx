import { useAuth } from './AuthContext';

function Dashboard() {
  const { user } = useAuth();

  if (!user) return <h3>Please login to view the Dashboard</h3>;

  return (
    <div>
      <h3>Welcome to your Dashboard, {user.name}!</h3>
    </div>
  );
}

export default Dashboard;
