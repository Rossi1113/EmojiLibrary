import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Favorite.css";


class Favorite extends PureComponent {
        render() {
            return (
                <div>
                    <h3>Favorite list</h3>
                    <ul className="container" > {this.props.list.map(item =>(
                        <li className="non-dot">
                            <img alt=" " src={item}/></li>
                    ))}
                    </ul>
                </div>
            );
        }
    // }
}

Favorite.propTypes = {
  list: PropTypes.array
};

export default Favorite;
