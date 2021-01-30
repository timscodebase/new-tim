import React from 'react'
import styles from './ContactForm.module.css'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label className={styles.label} htmlFor="name">
              <p hidden>Your Name:</p>
              <input
                id="name"
                className={styles.input}
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label
              className={`${styles.padTop} ${styles.label}`}
              htmlFor="email"
            >
              <p hidden>Your Email:</p>
              <input
                id="email"
                className={styles.input}
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label
              className={`${styles.padTop} ${styles.label}`}
              htmlFor="message"
            >
              <p hidden>Message:</p>
              <textarea
                id="message"
                className={styles.textarea}
                name="message"
                value={message}
                placeholder="Message"
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <button className={styles.submit} type="submit">
          Send
        </button>
      </form>
    )
  }
}

export default ContactForm
