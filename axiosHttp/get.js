const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1'

const getData = async url => {
  try {
    const response = await axios.get(url)
    const data = response.data
    return data
  } catch (error) {
    return error
  }// .catch
}// .getData

getData(url).then(function(data){
  console.log(data)
})// .getData
