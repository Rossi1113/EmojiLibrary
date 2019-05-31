import React, { PureComponent } from "react";
import PropTypes from "prop-types";


class Favorite extends PureComponent {
        render() {
            return (
                <div>
                    <ul> {this.props.list.map(item =>(
                        <li>
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
