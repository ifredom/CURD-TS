import { MockMethod } from 'vite-plugin-mock'

// http://mockjs.com/examples.html#Object
const mapList = (): any => {
  const result: any[] = []
  for (let index = 0; index < 200; index++) {
    result.push({
      plateNumber: "豫A@natural(11111, 99999)@character('upper')",
      driver: '@cname()',
      "lng|113-114.1-10": 1,
      "lat|34-35.1-10": 1
    })
  }
  return result
}

export default [
  {
    url: '/getMapInfo',
    method: 'get',
    response: () => {
      return {
        code: 0,
        info: mapList()
      }
    },
  }
] as MockMethod[]
