import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import './SearchComplete.css';

function SearchBar() {

    const [loading , setLoading] = useState(false);
    const [errorMsg , setErrorMsg] = useState('');
    const [users , setUsers] = useState([]);
    const [searchParams , setSearchParams] = useState('');
    const [searchDropDown , setSearchDropDown] = useState(false);
    const [searchOptions , setSearchOptions] = useState([]);

    async function fetchUserDataApi(){
        try {
            setLoading(true);
            const data = await fetch("https://dummyjson.com/users?limit=50");
            const userData = await data.json();
            if(userData && userData.users && userData.users.length){
                const userNames = userData.users.map((userItem) => userItem.firstName);
                setUsers(userNames);
                console.log(userNames);
            }
            setLoading(false);
            
        } catch (error) {
            setErrorMsg(error);
        }

    }

    useEffect(()=>{
        fetchUserDataApi();
    } , []);

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        if(query.length > 0){
            const filteredData = users && users.length ? 
                users.filter(item => item.toLowerCase().startsWith(query))
                : [];
                setSearchOptions(filteredData);
                setSearchDropDown(true);
                console.log(users , filteredData);
        }
        else{
            setSearchDropDown(false);
        }
    }
    function handleClick(event){
        setSearchParams(event.target.innerText);
        setSearchDropDown(false);
    }

    if(loading){
        return(
            <h3>Loading, please wait.....</h3>
        )
    }
    if(errorMsg){
        return(
            <h3>Error occured : {errorMsg}</h3>
        )
    }

    return (
        <div className="container">
            <div className="input-box">
                <input 
                    name="name-search"
                    type="text"
                    value={searchParams}
                    onChange={handleChange}
                    placeholder="Search name here..."
                    >
                </input>
            </div>
            {
                searchDropDown ? 
                <div className="suggestion-box">
                    <Suggestions searchOptions={searchOptions} handleClick={handleClick}/>
                </div>
                :null
            }
        </div>
    );
}

export default SearchBar;