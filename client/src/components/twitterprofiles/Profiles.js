import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import PostForm from './PostForm';

class Profiles extends Component {
  componentDidMount() {
    //this.props.getProfiles();
  }

  render() {
    const { tprofiles,loading } = this.props.post;
    let tprofileItems;
    if (tprofiles === null && loading ) {
      tprofileItems = <Spinner />;
    }
    else{

      if (( tprofiles!=null)&&(tprofiles.length > 0)) {
        tprofileItems = tprofiles.map(tprofile => (
          <div key={tprofile.id} className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <img src={tprofile.profile_image_url_https} alt="" className="rounded-circle" />
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{tprofile.name}</h3>

              <a href={`https://twitter.com/${tprofile.screen_name}`} className="btn btn-info" target="_blank">
                View Profile
              </a>
            </div>
          </div>
        </div>
        ));
      } else {
        tprofileItems = <h4>Search Something...</h4>;
      }

    }

    






    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Twitter Profiles</h1>
              <p className="lead text-center">
                Search and connect with developers
              </p>
              <PostForm />             
              {tprofileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  post: state.post
});

export default connect(mapStateToProps)(Profiles);
