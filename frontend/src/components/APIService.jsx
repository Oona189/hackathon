export default class APIService {
    static SetTheme(body){
    return fetch('http://127.0.0.1:3001/theme', {
        'method': 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(resp => resp.json())
    }
    static SetFormateur(body){
        return fetch('http://127.0.0.1:3001/formateur', {
            'method': 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          }).then(resp => resp.json())
        }
        static SetPartenaire(body){
            return fetch('http://localhost:3001/partenaire', {
                'method': 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
              }).then(resp => resp.json())
            }
}
