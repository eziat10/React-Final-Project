import { Link } from 'react-router-dom';

const SubscriptionsWatched = ({ subscriptions }) => {
    return (
        <div className="subscriptions-watched">
            <h4>Subscriptions watched</h4>
            <ul>
                {subscriptions.map(sub => (
                    <li key={sub._id}>
                        <Link to={`/main/subscriptions/all-members`}>
                            {sub.member_id.name}
                        </Link>
                        , {new Date(sub.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubscriptionsWatched;