import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import Favorite from "./Favorite";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
      favList:[],
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  handleAddFav = event => {
      var emoji = event.target.name;
      this.setState(state => {
          const list = state.favList.concat(emoji);
          return {favList : list};
      });
  };

  handleRemoveFav =  event => {
      var emoji = event.target.name;
      this.setState(state => {
          const list = state.favList.filter(item => item !== emoji);
          return {favList : list};
      });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <Favorite list={this.state.favList} />
        <EmojiResults emojiData={this.state.filteredEmoji} addFav={this.handleAddFav} removeFav={this.handleRemoveFav}/>
      </div>
    );
  }
}
export default App;
