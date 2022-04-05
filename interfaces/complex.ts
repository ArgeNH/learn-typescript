(() => {

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string,
        coord?: Coord
    }

    interface Coord {
        lat: string,
        lng: string
    }

    const client: Client = {
        name: 'Arge',
        age: 22,
        address: {
            id: 90,
            zip: '127597',
            city: 'Nobsa'
        },
        getFullAddress(id: string): string {
            return this.address.city;
        },
    }

    const client2: Client = {
        name: 'Juanita',
        age: 18,
        address: {
            id: 14,
            zip: '127597',
            city: 'Nobsa'
        },
        getFullAddress(id: string): string {
            return this.address.city;
        }
    }


})()