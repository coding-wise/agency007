import passport from 'passport'
import facebookStrategy from 'passport-facebook'
import googleOauth2 from 'passport-google-oauth2'
import linkedInOauth2 from 'passport-linkedin-oauth2'

import { config } from '.'
import { authenticate } from '../services/authentication/authenticate'
import { logger } from '../services/logger'

export const initializePassport = () => {
  const callbackSuccess = (token, refreshToken, profile, done) => done(null, { token, refreshToken, profile })
  const addPassportProvider = (provider, Strategy, config) =>
    passport.use(
      provider,
      new Strategy(
        {
          ...config,
        },
        callbackSuccess,
      ),
    )

  addPassportProvider(config.auth.providers.google, googleOauth2.Strategy, config.auth.google)

  passport.serializeUser(async (authenticationInfo, done) => {
    logger.info('serializing user')

    try {
      await authenticate(authenticationInfo)
    } catch (err) {
      done(err, authenticationInfo)

      return
    }

    done(null, authenticationInfo)
  })

  passport.deserializeUser(async (authenticationInfo, done) => {
    logger.info('deserializing user')

    try {
      await authenticate(authenticationInfo)
    } catch (err) {
      done(err, authenticationInfo)

      return
    }

    done(null, authenticationInfo)
  })
}
