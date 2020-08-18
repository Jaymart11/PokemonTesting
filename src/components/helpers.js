function choice(items) {
  const randNum = Math.floor(Math.random() * items.length);

  return items[randNum];
}

function remove(items, item) {
  const fruity = items.indexOf(item);
  items.splice(fruity, 1);

  return items;
}

export { choice, remove };
