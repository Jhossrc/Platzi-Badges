import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";

import api from "../api";
import PageError from "../components/PageError";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className='Badges'>
          <div className='Badges__hero'>
            <div className='Badges__container'>
              <img
                src={confLogo}
                alt='Conf Logo'
                className='Badges_conf-logo'
              />
            </div>
          </div>
        </div>

        <div className='Badges__list'>
          <div className='Badges__container'>
            <div className='Badges__buttons'>
              <Link to='/badges/new' className='btn btn-primary jr_shadow'>
                New Badge
              </Link>
            </div>
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
