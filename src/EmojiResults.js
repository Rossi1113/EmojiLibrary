import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

class EmojiResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
            addFavRow={this.props.addFav}
            removeFavRow={this.props.removeFav}
          />
        ))}
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array,
  addFav: PropTypes.func,
  removeFav: PropTypes.func
};
export default EmojiResults;
