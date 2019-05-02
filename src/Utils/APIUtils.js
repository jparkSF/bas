export const fetchAllWorks = () => {
  return fetch('https://xe4rfp4x38.execute-api.us-west-1.amazonaws.com/api/works')
    .then(res => { return res.json() })
    .then(json => { return json })
}

export const fetchAllJournals = () => {
  return fetch('https://xe4rfp4x38.execute-api.us-west-1.amazonaws.com/api/blogs')
    .then(res => { return res.json() })
    .then(json => { return json })
}

