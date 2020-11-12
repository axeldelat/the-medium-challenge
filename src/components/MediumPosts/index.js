import React, { Component } from "react";

// Components
import CustomInput from "../CustomInput";

// CSS
import "./MediumPosts.css";

const POSTS_JSON = [
  {
    title: "Prueba1",
    subtitle: "a ver si sale",
    author: "Lucho",
    authorImage: "avatar",
    date: "nov 15",
    timeToRead: "13 min",
    content: "una prueba de objetos",
    category: "random",
    featured: true,
    popular: true,
    editorsPick: true,
    imageUrl: "imagen"
  },
  {
    title: "Prueba2",
    subtitle: "a ver si sale",
    author: "Haro",
    authorImage: "avatar",
    date: "nov 15",
    timeToRead: "8 min",
    content: "una prueba de objetos2",
    category: "alguna",
    featured: true,
    popular: false,
    editorsPick: true,
    imageUrl: "imagen2"
  },
];

class MediumPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: "",
      subtitle: "",
      author: "",
      authorImage: "",
      date: "",
      timeToRead: "",
      content: "",
      category: "",
      featured: "",
      popular: "",
      editorsPick: "",
      imageUrl: ""
    };

    this.handlerNewPostChange = this.handlerNewPostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let postsLocal = localStorage.getItem("posts");
    if (postsLocal) {
      this.setState({
        posts: JSON.parse(postsLocal),
      });
    } else {
      setTimeout(() => {
        localStorage.setItem("posts", JSON.stringify(POSTS_JSON));
        this.setState({
          posts: POSTS_JSON,
        });
      }, 2000);
    }
  }

  renderPosts() {
    return this.state.posts.map(({ title, subtitle, author, authorImage, date, timeToRead, content, category, featured, popular, editorsPick, imageUrl }) => {
      return (
        <ul>
          <li>{title}</li>
          <li>{subtitle}</li>
          <li>{author}</li>
          <li>{authorImage}</li>
          <li>{date}</li>
          <li>{timeToRead}</li>
          <li>{content}</li>
          <li>{category}</li>
          <li>{featured}</li>
          <li>{popular}</li>
          <li>{editorsPick}</li>
          <li>{imageUrl}</li>
        </ul>
      );
    });
  }

  handlerNewPostChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { posts, title, subtitle, author, authorImage, date, timeToRead, content, category, featured, popular, editorsPick, imageUrl } = this.state;
    const newPost = {
      title: title,
      subtitle: subtitle,
      author: author,
      authorImage: authorImage,
      date: date,
      timeToRead: timeToRead,
      content: content,
      category: category,
      featured: featured,
      popular: popular,
      editorsPick: editorsPick,
      imageUrl: imageUrl
    };
    let postsLocal = JSON.parse(localStorage.getItem("posts"));
    postsLocal.push(newPost);
    localStorage.setItem("posts", JSON.stringify(postsLocal));
    // eslint-disable-next-line no-undef
    posts.push(newPost);
    this.setState({
      // eslint-disable-next-line no-undef
      posts,
      title: "",
      subtitle: "",
      author: "",
      authorImage: "",
      date: "",
      timeToRead: "",
      content: "",
      category: "",
      featured: "",
      popular: "",
      editorsPick: "",
      imageUrl: "",
    });
  }

  render() {
    const { posts, title, subtitle, author, authorImage, date, timeToRead, content, category, featured, popular, editorsPick, imageUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title:{" "}
          <CustomInput
            type="text"
            value={title}
            name="title"
            callback={this.handlerNewPostChange}
          />
          Subtitle:{" "}
          <CustomInput
            type="text"
            value={subtitle}
            name="subtitle"
            callback={this.handlerNewPostChange}
          />
          Date:{" "}
          <CustomInput
            type="date"
            value={date}
            name="date"
            callback={this.handlerNewPostChange}
          />
          Time To Read:{" "}
          <CustomInput
            type="number"
            value={timeToRead}
            name="timeToRead"
            callback={this.handlerNewPostChange}
          />
          Content:{" "}
          <CustomInput
            type="text"
            value={content}
            name="content"
            callback={this.handlerNewPostChange}
          />
          Featured:{" "}
          <CustomInput
            type="checkbox"
            value={featured}
            name="featured"
            callback={this.handlerNewPostChange}
          />
          Editor's Pick:{" "}
          <CustomInput
            type="checkbox"
            value={editorsPick}
            name="editorsPick"
            callback={this.handlerNewPostChange}
          />
          Popular:{" "}
          <CustomInput
            type="checkbox"
            value={popular}
            name="popular"
            callback={this.handlerNewPostChange}
          />
          Image URL:{" "}
          <CustomInput
            type="text"
            value={imageUrl}
            name="imageUrl"
            callback={this.handlerNewPostChange}
          />
          Category:{" "}
          <CustomInput
            type="text"
            value={category}
            name="category"
            callback={this.handlerNewPostChange}
          />
          Author:{" "}
          <CustomInput
            type="text"
            value={author}
            name="author"
            callback={this.handlerNewPostChange}
          />
          Author Image:{" "}
          <CustomInput
            type="text"
            value={authorImage}
            name="authorImage"
            callback={this.handlerNewPostChange}
          />
          <button type="submit">SUBMIT POST</button>
        </form>
        {posts.length ? (
          <ul>{this.renderPosts()}</ul>
        ) : (
          <h1>No Posts</h1>
        )}
      </div>
    );
  }
}

export default MediumPosts;