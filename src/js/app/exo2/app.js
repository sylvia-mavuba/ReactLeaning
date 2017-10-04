import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBlog from './header-blog';
import PostsList from './posts-list';
import posts from './posts-list';

class AdminBlog extends React.Component() {
  constructor(props) {
      super(props);
  }

  //au chargement de l'appli il faut que je charge la liste d'article
  componentDidMount() {

  }

  render() {
    return (
      <HeaderBlog />,
      <PostsList posts={this.props.posts} />
    )
  }
}

ReactDOM.render(
  <AdminBlog />,
  document.getElementById('blog-app')
);


