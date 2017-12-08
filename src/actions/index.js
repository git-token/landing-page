import { newsletterUri } from '../../app.config.js'

import NewsletterActions from './NewsletterActions'

module.exports = {
  newsletterActions: new NewsletterActions({ newsletterUri })
}
