export const lastMinuteAll = async () => {
  const res = await fetch(
    "https://feeds.datafeedwatch.com/19973/3f147dff0974f74f68c672a75abb23edae110ea8.json"
  );
  const data = await res.json();
  return {
    data: data?.products.slice(0, 4),
  };
};

export const lastMinute = async (country) => {
  const res = await fetch(
    "https://feeds.datafeedwatch.com/19973/3f147dff0974f74f68c672a75abb23edae110ea8.json"
  );
  const data = await res.json();
  const filteredData = data?.products.filter(
    (item) => item?.country === country
  );
  return {
    data: filteredData,
  };
};
