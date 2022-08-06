import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/css/github.css";
import { GetRepositories } from '../repositories'

function GithubUserProfile(props) {
    const { avatar } = props;
    return (
        <div className="github-profile">
            <img className="github-avatar" src={avatar}
            align="left"></img>
            <div>Name:</div>
        </div>
    )
}

function GithubRepository(props) {
    const { name, 
        description,
        languagesUrl, 
        url
    } = props;
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetchLanguages(languagesUrl);
    }, [languagesUrl]);
    async function fetchLanguages(url) {
        console.log('get url');
        const result = await axios.get(url);
        setLanguages(Object.keys(result.data));
    }

    return (
        <div className="github-repository">
            <h2>
                <a href={url}>{name}</a>
            </h2>
            <div style={{height: "40px"}}>
                {description}
            </div>
            <div className="github-repository-languages">
                <div>Languages: {languages.join(',')}</div>
            </div>
        </div>
    )
}

function GithubRepositories(props) {
    const { repositories } = props;
    return (
        <div className="github-repositories">
            <div className="frame tw-grid tw-grid-cols-3 tw-gap-2">
                {repositories?.map((element) => <GithubRepository
                key={element.id}
                name={element.name}
                url={element.html_url}
                description={element.description}
                languagesUrl={element.languages_url} />)}
            </div>
        </div>
    )
}

export default function Github() {
    const [userData, setUserData] = useState({
       avatar_url: "", 
    });
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetchGithubUser();
        fetchGithubRepositories();
    }, []);

    async function fetchGithubUser() {
        const githubUserData = await axios.get("https://api.github.com/users/luual");
        console.log('Fetch User');
        setUserData(githubUserData.data);
    }

    async function fetchGithubRepositories() {
        console.log("fetch repos")
        const result = await axios.get("https://api.github.com/users/luual/repos");
        setRepositories(result.data);
        // const result = GetRepositories();
        // setRepositories(result);
    }

    return (
        <div className="github content" id="github">
            <h1>Github</h1>
            <GithubUserProfile avatar={userData.avatar_url}/>
            <GithubRepositories repositories={repositories} />
        </div>
    );
}