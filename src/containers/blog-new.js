import React, { Component } from 'react';
import { Field, reduxFrom } from 'redux-form';

class BlogNew extends Component {
  render() {
    return (
      <div>
        blog new
      </div>
    );
    // <form className="form-group">
    //   <div className="form-control">
    //     <Field 
    //       label="title"
    //       name="title"
    //       component={}
    //     />
    //   </div>
    //   <div className="form-control">
    //     <Field 
    //       label = "categories"
    //       name="categories"
    //       component={}
    //     />
    //   </div>
    //   <div className="form-control">
    //     <Field 
    //       lable="content"
    //       name="content"
    //       component={}
    //     />
    //   </div>
    // </form>
  }
}

export default BlogNew;