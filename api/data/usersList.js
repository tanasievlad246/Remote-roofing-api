let names = ['Rolland',
    'Amina',
    'Danille',
    'Tiesha',
    'Stephnie',
    'Juliane',
    'George',
    'Charisse',
    'Haywood',
    'Salvatore',
    'Jesica',
    'Kyog',
    'Tyrell',
    'Janice',
    'Valda',
    'Johnson',
    'Veola',
    'Quintin',
    'Jack',
    'Krystle'];
let surname = [
    'Herot',
    'Huttenback',
    'Castillo',
    'Benabou',
    'Kee',
    'Kenward',
    'Ramey',
    'Pulido',
    'Lage',
    'Middle',
    'O\'marley',
    'Trinh',
    'Ogletree',
    'Herrin',
    'Clare',
    'Isola',
    'Cesar',
    'Wagen',
    'Davy',
    'Good'
];

let emails = [];

for (let i = 0, len = names.length; i < len; i++) {
    emails.push(`${names[i]}.${surname[i]}@gmail.com`);
}

let users = [];

for (let i = 0, len = names.length; i < len; i++) {
    users.push(
        {
            name: names[i],
            surname: surname[i],
            email: emails[i]
        }
    )
}

export default users