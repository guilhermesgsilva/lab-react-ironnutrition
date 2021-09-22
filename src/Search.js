import React, { useState } from 'react';
import { Input } from "antd";

function Search ({filterFoods}) {
    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
        filterFoods(e.target.value)
    };

    return (
        <form >
            <label>Search</label>
            <Input value={search} type="text" onChange={handleSearchInput}/>
        </form>
    )
};

export default Search;
