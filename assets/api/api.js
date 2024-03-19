export const usuario = async (buscar) => {
  const url = 'https://twitter154.p.rapidapi.com/user/tweets?username=' + buscar + '&limit=4&include_replies=false&include_pinned=false'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd1a1861c7bmsh5b84f32df206d0dp14d3b1jsnf054baf4494c',
      'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
    return result.results
  } catch (error) {
    console.error(error)
    throw error
  }
}
