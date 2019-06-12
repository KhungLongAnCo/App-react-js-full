import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import menus from '../../menuItem';

let MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                return (
                    <li className={match ? 'active' : ''}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}


class Menu extends Component {
    render() {
        return (
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                {this.showMenus(menus)}
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink
                    key={index}
                    to={menu.to}
                    label={menu.name}
                    activeOnlyWhenExact={menu.exact}
                />
            })
        }
        return result;
    }
}

export default Menu;