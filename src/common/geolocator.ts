export class Geolocator {
  async getCurrentRegion(): Promise<string> {
    const response = await fetch('https://api.country.is')
    const json: { ip: string; country: string } = await response.json()
    return json.country
  }
}
