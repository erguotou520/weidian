function request (url: string, callback: Function) {
  const req = new XMLHttpRequest()
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      if (req.status < 400) {
        callback(true, req.response)
      } else {
        callback(false, req.response)
      }
    }
  }
  req.open('GET', url, true)
  req.send(null)
}

export function get (url: string) {
  return new Promise((resolve, reject) => {
    request(url, (success: boolean, response: any) => {
      let data: JSON | string
      try {
        data = JSON.parse(response)
      } catch (error) {
        data = response
      }
      if (success) resolve(data)
      else reject(data)
    })
  })
}