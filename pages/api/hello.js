import { getContinentData, getCountryData } from "../../queries/continent";

export const fetchSlugs = async () => {
  const continentRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/continents"
  );

  const continents = await continentRes.json();

  const countryRes = await fetch(
    "https://wakacjopedia-strapi.herokuapp.com/countries"
  );

  const countries = await countryRes.json();

  let slugArr = [];

  continents.map((item) => {
    const continentSlug = item.slug;
    item.countries.map((item) => {
      return (slugArr = [
        ...slugArr,
        { country: item.slug, continent: continentSlug },
      ]);
    });
  });

  return { slugs: slugArr };
};
