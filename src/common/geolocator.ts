export class Geolocator {
  async getCurrentRegion(): Promise<string> {
    return fetch('https://api.country.is').then((response) =>
      response
        .json()
        .then((data: { ip: string; country: string }) => data.country)
    )
  }
}
