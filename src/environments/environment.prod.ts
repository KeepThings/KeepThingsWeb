export const environment = {
  production: true,
  auth: {
    clientID: 'darTWkOKmvvDIwIKw2Qaw6hTuakyHsFy',
    domain: 'keepthings.eu.auth0.com', // e.g., you.auth0.com
    audience: 'https://localhost:5001/api/', // e.g., http://localhost:3001
    redirect: 'http://keepthingsweb.azurewebsites.net/callback',
    scope: 'openid profile email'
  }
};
