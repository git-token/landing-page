import axios from 'axios'

export default class NewsletterActions {
  constructor({ newsletterUri }) {
    this.newsletterUri = newsletterUri ? newsletterUri : 'https://newsletter.gittoken.io/newsletter/subscribe'
  }

  register({ email }) {
    return (dispatch) => {
      axios({
        method: 'POST',
        url: this.newsletterUri,
        data: { email },
        json: true,
      }).then((result) => {
        console.log('result', result)
      }).catch((error) => {
        console.log('error', error)
      })
    }
  }
}
