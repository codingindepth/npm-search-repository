import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";


interface ChildProps {
    color: string;
    onClick: () => void;
}

const RepositoriesList: React.FC = () => {

    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();
    const { data, error, loading} = useTypedSelector((state) => state.repositories)
    console.log(data);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
            { error && <h3> {error}</h3> }
            { loading && <h3> Loading ...</h3>}
            { !error && !loading && 

            <ul>
                {data.map((name)=> <li key={name}>{name}</li>)}
            </ul>
            
            }
        </form>
    </div>;
};


export default RepositoriesList;