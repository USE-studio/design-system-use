import * as Figma from 'figma-js'

// const fetchFigmaVariables = () => {
class FetchFigmaVariables {
  constructor () {
    // Figma - start
    this.accessToken = '249462-ec3f7631-8a9e-405d-a14f-70b523615b3b'
    this.client = Figma.Client({
      personalAccessToken: this.accessToken
    })

    this.init()
  }
  
  init () {
    console.log('fetching figma variables')

    this.fetchFigmaFile()
  }
  
  fetchFigmaFile () {
    let _this = this

    _this.client.file('4AraRspiIhO6uWLsRP8EVD').then(({ data }) => {
      // Store the data
      _this.figmaData = data
      
      console.log(JSON.stringify( _this.figmaData ))
    })
  }
  
}

const fetchFigmaVariables = new FetchFigmaVariables()
// export fetchFigmaVariables