
  //fetch basedon generator

  function fetchJson(url) {
    return fetch(url)
    .then(request => request.text())
    .then(text => {
        return JSON.parse(text);
    })
    .catch(error => {
        console.log(`ERROR: ${error.stack}`);
    });
  }
  
  fetchJson()

  

  const onQuery = async ({slugName = `Akulova_Marina_Valentinovna`}) => {
    try {
      //console.log(domainName, `flowQuery`, `dev`, dev)
      const URI = dev
        ? `http://localhost:4000/api/v1/kp`
        : `https://kp.frontmaster.su/api/v1/kp`

      const response = await fetch(`${URI}/${slugName}`)

      if (response.status !== 200) {
        throw new Error(`Wrong status`)
      }

      const {kp} = await response.json()

      return kp
    } catch (err) {
      console.log(domainName, `onQuery`, err)
      console.log(`Fallback to fake query`)

      const data = await queryFake()

      console.log(`data`, data)

      return data
    }
  }