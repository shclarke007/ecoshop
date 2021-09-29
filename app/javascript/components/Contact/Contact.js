import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { ReleaseNotes } from '../Notes/ReleaseNotes'

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState({
    fullName: '',
    email: '',
    text: ''
  })

  const handleChange = (e) =>{
    setError(false);
    setMessage(Object.assign({}, message, { [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(message.fullName && message.email && message.text) {
      setSubmitted(true);
      alert('This feature is coming soon! :)')
      setMessage({fullName: '', email: '', text: ''});
      setSubmitted(false);
    } else {
      setSubmitted(false);
      setError(true)
    }
    
  }
  return (
    <>
      <Nav />
      <section className="container">
        <div className="d-flex flex-column align-items-center mb-4">
          <h1>Contact Us</h1>
          <p>Questions or Suggestions? Contact us below</p>
        </div>
      {submitted ||
        (error && (
          <div className="d-flex justify-content-center">
            <p className="badge bg-warning text-white">Opps! Looks like you didn't fill in everything</p>
          </div>
        ))}
      <article className="d-flex flex-row justify-content-center">
        <form className="form">
          <div className="mb-3">
            <label htmlFor="name">Your Name </label>
            <input
              className="form-control"
              type="text"
              id="fullName"
              name="fullName"
              value={message.name}
              onChange={handleChange}
              placeholder="What would you like us to call you?"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={message.email}
              onChange={handleChange}
              placeholder="person@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text">Message </label>
            <textarea
            className="form-control"
            rows="6"
            cols="50"
            id="text"
            name="text"
            value={message.text}
            onChange={handleChange}
            placeholder="What's on your mind?"
            > 
            </textarea>
          </div>
          <button
            className="btn btn-primary mb-4"
            type="submit"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
        </article>
      </section>
      <section className="container">
        <ReleaseNotes />
      </section>
    </>
  )
}

export default Contact
