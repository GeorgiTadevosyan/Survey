import React, { useState } from "react";
import { Card } from "../../components";
import "./home.css";

const Home = () => {
    const [art, setArt] = useState("");
    const [years, setYears] = useState("");
    const [future, setFuture] = useState("");
    const [artist, setArtists] = useState("");
    const [armenian, setArmenian] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const state = {
        years,
        artist,
        art,
        future,
        armenian
    };

    const submitHandler = (event) => {
        event.preventDefault();
        fetch("https://cse120-2021-api.herokuapp.com/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        })
          .then((response) => response.json())
          .then((data) => {
        setModalOpen(true);
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    const closeHandler = () => {
        setModalOpen(false);
    };

    const yearsHandler = (event) => {
        const selectedValue = (event.target.value)
        if(selectedValue === '1'){
            setYears('Less than a year')
        }
        else if(selectedValue === '2'){
            setYears('1-5 Years')
        }
        else if(selectedValue === '3'){
            setYears('More Than 5 Years')
        }
    }

    const artistHandler = (event) => {
        const selectedValue = (event.target.value)
        if(selectedValue === '1'){
            setArtists('Leonardo da Vinci')
        }
        else if(selectedValue === '2'){
            setArtists('Vincent van Gogh')
        }
        else if(selectedValue === '3'){
            setArtists('Claude Monet')
        }
    }

    const artHandler = (event) => {
        const selectedValue = (event.target.value)
        if(selectedValue === '1'){
            setArt('Leonardo da Vinci')
        }
        else if(selectedValue === '2'){
            setArt('Vincent van Gogh')
        }
        else if(selectedValue === '3'){
            setArt('Claude Monet')
        }
    }

    const futureHandler = (event) => {
        const selectedValue = (event.target.value)
        if(selectedValue === '1'){
            setFuture('Yes')
        }
        else if(selectedValue === '2'){
            setFuture('No')
        }
    }

    const armenianPainterHandler = (event) => {
        const selectedValue = (event.target.value)
        if(selectedValue === '1'){
            setArmenian('Yes')
        }
        else if(selectedValue === '2'){
            setArmenian('No')
        }
    }

    console.log(state)

    return (
        <div className="home">
            <Card title="Survey" required={false}>
                <p className="req">Required *</p>
            </Card>

            <Card title="How Many Years Have You Been Painting" required={true}>
                <select onChange={(event) => yearsHandler(event)} id="years">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="1">Less Than A Year</option>
                    <option value="2">1-5 Years</option>
                    <option value="3">More Than 5 Years</option>
                </select>
            </Card>
            <Card title="Who Is Your Favorite Artist" required={true}>
                <select onChange={(event) => artistHandler(event)} id="artists">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="1">Leonardo da Vinci</option>
                    <option value="2">Vincent van Gogh</option>
                    <option value="3">Claude Monet</option>
                </select>
            </Card>
            <Card title="What is your favorite painting" required={true}>
                <select onChange={(event) => artHandler(event)} id="art">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="1">The Starry Night</option>
                    <option value="2">Impression, Sunrise</option>
                    <option value="3">The Last Supper</option>
                </select>
            </Card>
            <Card title="Do you plan to paint in future" required={false}>
                <select onChange={(event) => futureHandler(event)} id="future">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </Card>
            <Card title="Have you heard about Armenian painters?" required={true}>
                <select onChange={(event) => armenianPainterHandler(event)} id="armenianPainters">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </Card>


            {!modalOpen && (
                <div className="submit">
                    <button onClick={submitHandler}>Submit</button>
                </div>
            )}
            {modalOpen && (
                <div className="modal">
                    <p>Data has been successfully sent</p>
                    <div className="submit">
                        <button onClick={closeHandler}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
