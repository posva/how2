import axios from 'axios'

const gso = axios.create({
  baseURL: 'https://posva-how2.now.sh'
})

export function getBestAnswer (question) {
  return gso(`/best-answer/${question}`)
    .then(({ data }) => data.items[0])
    .catch(err => {
      if (err.response && err.response.status >= 400 && err.response.status < 500) return null
      else throw err
    })
}
