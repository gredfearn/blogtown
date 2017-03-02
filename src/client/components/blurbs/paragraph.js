import React, {Component} from 'react';

class Paragraph extends Component {
  render() {
    console.log('THIS.PROPS!', this.props)
    return (
      <div className='blogs'>
        {this.props.blogs.map((function(blog) {
          return (
            <div key={blog._id}>
              <h2>{blog.title}</h2>
              <h3>{blog.author}</h3>
              <p>{blog.post}</p>
            </div>
            )
        }))}
      </div>
    )
  }
}

export default Paragraph;

