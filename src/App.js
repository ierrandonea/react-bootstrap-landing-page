import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

const cardGroup = [
  {
    title: "Card1",
    imgURL: "https://picsum.photos/id/1059/200/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonLabel: "Go Somewhere",
    buttonURL: "https://www.wikipedia.com"
  },
  {
    title: "Card2",
    imgURL: "https://picsum.photos/id/1069/200/300",
    description: "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu augue ut lectus arcu bibendum. Lorem ipsum dolor sit amet consectetur.",
    buttonLabel: "Go Elsewhere",
    buttonURL: "https://www.google.com"
  },
  {
    title: "Card3",
    imgURL: "https://picsum.photos/200/300",
    description: "Odio morbi quis commodo odio aenean. Non consectetur a erat nam. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.",
    buttonLabel: "Go Another way",
    buttonURL: "https://code.visualstudio.com/"
  },
  {
    title: "Card4",
    imgURL: "https://picsum.photos/id/137/200/300",
    description: "Nunc sed id semper risus in hendrerit gravida rutrum. Laoreet id donec ultrices tincidunt arcu non sodales. Diam quis enim lobortis scelerisque.",
    buttonLabel: "Go Back to the Future",
    buttonURL: "https://www.nasa.gov/"
  }
];

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row d-flex flex-row justify-content-aorund">
          {
            cardGroup.map((cardInfo, i) =>{
              return <Card 
                title= {cardInfo.title}
                imgURL= {cardInfo.imgURL}
                description= {cardInfo.description}
                buttonLabel= {cardInfo.buttonLabel}
                buttonURL= {cardInfo.buttonURL}
               />
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
