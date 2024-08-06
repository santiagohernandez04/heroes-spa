import { heroes } from "../data/heroes";

export const getHeroByName = (name) => {
    name = name.toLowerCase().trim();
    if (name === '') {
        return [];
    }
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}