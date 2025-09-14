// export default {simulateFetch}

//Mock Data
const database = [
    { img: 'src\\assets\\Aria_of_Sorrow.jpg', title: 'Aria of Sorrow', price: 20, rating: 4.5, promo: false, new: false },
    { img: 'src\\assets\\chrono.jpg', title: 'Chrono Trigger', price: 30, rating: 4.8, promo: false, new: false },
    { img: 'src\\assets\\metal_gear.jpg', title: 'Metal Gear', price: 45, rating: 3.4, promo: false, new: false },
    { img: 'src\\assets\\Metroid_Fusion.jpg', title: 'Metroid Fusion', price: 30, rating: 4.5, promo: false, new: false },
    { img: 'src\\assets\\halo.jpg', title: 'Halo: Combat Evolved', price: 75, rating: 4.1, promo: false, new: false },
    { img: 'src\\assets\\sfa2.jpg', title: 'Street Fighter Zero 2', price: 50, rating: 4.2, promo: false, new: false }
]

export async function simulateFetch(id) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return database[id]
}