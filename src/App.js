import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";


class App extends React.Component {
  state = {
    message: "Click Any pic!",
    highScore: 0,
    currentScore: 0,
    friends: friends,
    unselectedFriends: friends
  };

  
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  }; 

  selectFriend = name => {
    const findFriend = this.state.unselectedFriends.find(item => item.name === name);

    if (findFriend === undefined) {
      this.setState({
        message: "OOPS! Try Again.",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        friends: friends,
        unselectedFriends: friends
      });
    } else {
  
      const newFriend = this.state.unselectedFriends.filter(item => item.name !== name);

      this.setState({
        message: "Cool, you are doing greate!",
        currentScore: this.state.currentScore + 1,
        friends: friends,
        unselectedFriends: newFriend
      });
    }
    this.shuffleArray(friends);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          message = {this.state.message}
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore}
        />
        <Title/>
        <div className="containingDiv">
          {this.state.friends.map(character => (
            <CharacterCard 
              name={character.name} 
              id={character.id}
              key={character.id}
              image={character.image}
              selectFriend={this.selectFriend}
              currentScore={this.state.currentScore}
            />
          ))}
        </div>
        <Footer/>
      </Wrapper>
    );
  }
     
 
}

export default App;
