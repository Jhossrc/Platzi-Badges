import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading"

import md5 from "md5";

import api from '../api'

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      avatarUrl: "https://es.gravatar.com/avatar?d=identicon",
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    const email = this.state.form.email;
    const hash = md5(email);
    const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

    this.setState({
      form: {
        ...this.state.form,
        avatarUrl,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: false, error: null})
    try {
      await api.badges.create(this.state.form);
      this.setState({loading: false});

      this.props.history.push('/badges');

    } catch (error) {
      this.setState({loading: false, error})
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading/>
    }

    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img className='BadgeNew__hero-image img-fluid' src={header} alt='Logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL' }
                twitter={this.state.form.twitter || 'twitter'}
                avatarUrl={this.state.form.avatarUrl} // Opcional
              />
            </div>

            <div className='col-6'>
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
