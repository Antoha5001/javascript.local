let obj = {
    'country': 'Russia',
    'city': 'Tomsk',
    'street': 'Lenina',
    getAddres: () => {
        return function () {
            return `${this.country}, ${this.city}`;
        }
    }
};

console.log(obj.getAddres());