import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

class Paragraph extends Component {
  render() {
    console.log('THIS.PROPS!', this.props)
    return (
      <div className='blogs'>
        {this.props.blogs.map((function(blog) {
          return (
            <div className={css(styles.outter)}>
              <div className={css(styles.container)} key={blog._id} >
                <strong className={css(styles.title)}><Link>{blog.title}</Link></strong>
                <i className={css(styles.author)}>{blog.author}</i>
                <p className={css(styles.post)}>{textTrimmer(blog.post)}</p>
              </div>
            </div>
            )
        }))}
      </div>
    )
  }
}

function textTrimmer(text) {
  let trim = text;
  if(text.length > 1000) {
   trim = text.substring(0,650)
  }
  return trim + '...'
 }

const styles = StyleSheet.create({
  outter: {
    backgroundColor: 'white',
    width: '80%',
    height: '20%'
  },
  container: {
    marginTop:'10px',
    marginLeft: '1%',
    marginRight: '2%',
    marginBottom: '2%',
    padding: '20px',
    width: '80%',
    height: '90%',
    overflow: 'hidden'
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '20px'
  },
  author: {
    marginLeft: '20px'
  },
  post: {

  },
  moreContainer: {
    float: 'right',
    display: 'inline-block',
    paddingRight: '50%'
  },
  more: {
    color: 'blue'
  }
})

export default Paragraph;

