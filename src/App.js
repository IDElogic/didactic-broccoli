import React,{ useState, useEffect } from "react";
import MonsterList from "./components/monster-list/MonsterList";
import SearchBox from "./components/searchbox/SearchBox";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App () {
    /*constructor() {
        super();
            this.state = {
            models: [],
            searchfield: "",
            };
    }*/

    const [models, setModels] = useState ([]);
    const [searchfield, setSearchfield] = useState('');
   
    const onSearchChange = (event) => {  
        setSearchfield(event.target.value);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((users) => setModels(users));
      }, []);

      const filteredModels = models.filter((model) => {
        return model.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
      });
    
        if (models.length === 0) {
            return <h1>Loading process...</h1>;
        }
        
        return (
            <div className="box">
                <Navbar />
                <Header />
                
                <SearchBox searchChange={onSearchChange} />
                <MonsterList models={filteredModels} />
                <Footer />
            </div>
        );
    }

export default App;