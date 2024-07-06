import { useState, useEffect } from 'react';
import axios from 'axios';
import MemberComp from './MemberComp';

const members_url = "http://localhost:3000/members";

const AllMembersComp = () => {
    const [members, setMembers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getMembers = async () => {
        try {
            const { data } = await axios.get(members_url);
            setMembers(data);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    };

    useEffect(() => {
        getMembers();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDelete = (memberId) => {
        setMembers(members.filter(member => member._id !== memberId));
    };

    const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ border: '1px solid black' }}>
            <div className="search-bar">
                <input
                    type="search"
                    placeholder="Search for a member"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <ul className="members-list">
                {filteredMembers.map((member) => (
                    <MemberComp key={member._id} member={member} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};

export default AllMembersComp;

