import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

class EmojiResultsRow extends PureComponent {
  constructor(props){
      super(props);
      this.state = {
          ifAdd: false
      };
  }

  addToFav = event => {
      this.props.addFavRow(event);
      this.setState({ifAdd: true});
  }

  removeFavorite = event => {
      this.props.removeFavRow(event);
      this.setState({ifAdd: false});
  }

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
        <div className="favorite-button">{this.state.ifAdd
        ? <button onClick={this.removeFavorite} name={src}> unFav </button>
        : <button onClick={this.addToFav} name={src}> Fav </button>}
        </div>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
  addFavRow: PropTypes.func
};
export default EmojiResultsRow;
