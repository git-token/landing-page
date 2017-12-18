import axios from 'axios'

export default class NewsletterActions {
  constructor({ newsletterUri }) {
    this.newsletterUri = newsletterUri ? newsletterUri : 'https://newsletter.gittoken.io/newsletter/subscribe'
  }

  register({ email }) {
    return (dispatch) => {
      if ( !email || email.length == 0 || !email.includes('@') ) {
        alert('Invalid Email')
      } else {
        axios({
          method: 'POST',
          url: this.newsletterUri,
          data: { email },
          json: true,
        }).then((result) => {
          alert('Thanks for Subscribing!')
          dispatch({
            type: 'SET_ACCOUNT_DETAILS',
            id: 'email',
            value: ''
          })
        }).catch((error) => {
          console.log('error', error)
          alert('Apologies! An error has occured')
        })
      }
    }
  }
}
