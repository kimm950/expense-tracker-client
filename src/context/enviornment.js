export function getEnvironment() {
  const development = `http://localhost:5000`;
  const production = `https://mern-transaction-tracker.herokuapp.com`;

  return process.env.NODE_ENV === 'development' ? development : production;
}
