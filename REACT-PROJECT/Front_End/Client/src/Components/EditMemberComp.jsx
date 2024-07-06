import  { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditMemberComp = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState({
        name: '',
        email: '',
        city: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/members/${id}`);
                setMember(response.data);
                console.log('Fetched Member:', response.data);
            } catch (error) {
                console.error('Error fetching member:', error);
                setError(`Error fetching member: ${error.message}`);
            }
        };

        fetchMember();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/members/${id}`, member);
            console.log('Update Response:', response.data);
            setMember(response.data);
            navigate('/main/subscriptions/all-members');
        } catch (error) {
            console.error('Error updating member:', error);
            setError(`Error updating member: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Edit Member</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={member.name || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={member.email || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={member.city || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Save</button>
                <button onClick={() => navigate('/main/subscriptions/all-members')}>Cancel</button>
            </form>
        </div>
    );
};

export default EditMemberComp;
