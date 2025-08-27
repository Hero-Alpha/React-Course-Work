import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import "./Profilecard.css";

function SearchPanel() {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [userName, setUserName] = useState('Hero-Alpha');
    const [userData, setUserData] = useState({});

    async function fetchGitHubProfileData(userName) {
        try {
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json();
            if (data) {
                setUserData(data);
                console.log(data);
            }
            setLoading(false);
            setUserName('');
        } catch (error) {
            setErrorMsg(error);
        }
    }

    useEffect(() => {
        fetchGitHubProfileData(userName);
    }, []);

    function handleSubmit() {
        fetchGitHubProfileData(userName);
        setUserName('');
    }

    if (loading) {
        return <h3>Please wait while profile loads...</h3>
    }

    if (errorMsg) {
        return <h3>Error Occurred : {errorMsg}</h3>
    }

    return (
        <div className="container">
            <div className="search-panel">
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="search-by-username"
                    placeholder="Search GitHub Profile..."
                    className="search-input"
                />
                <button onClick={handleSubmit} className="search-btn">Search</button>
            </div>

            {userData && userData.login ? (
                <ProfileCard userData={userData} />
            ) : null}
        </div>
    );
}

export default SearchPanel;
