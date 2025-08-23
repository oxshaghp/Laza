export const Category = Array.from({ length: 46 }, (_, i) => ({
  id: i + 1,
  title: `Category ${i + 1}`,
  img: `/categotyy/${i + 1}.png`,
}));